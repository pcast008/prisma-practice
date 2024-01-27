import { prisma } from "./prisma";
import { Movie } from "@prisma/client";

// find all movies that a user has watched
export const findAllMoviesThatAUserWatched = async (userId: number) => {
  return prisma.$queryRaw<Movie[]>`
        select *
        from 
            movie
        where
            id in (
                select 
                    movieid
                from 
                    starrating
                where
                    userid = ${userId}
            );
    `;
};
