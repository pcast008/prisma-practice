import { groupBy, map, reduce, sumBy } from "remeda";
import { prisma } from "./prisma";
import { Movie } from "@prisma/client";

// hint:find all stars with the movies "included" on, then good ol' javascript should finish the job
// This one should require more javascript work than the previous ones
export const getAllMoviesWithAverageScoreOverN = async (n: number) => {
  return prisma.$queryRaw<Movie[]>`
        select *
        from 
            movie
        where
            id in (
                select
                    movieId
                from  
                    StarRating
                group by
                    movieId
                having
                    avg(score) > ${n}
            );
    `;
};
