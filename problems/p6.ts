import { prisma } from "./prisma";

// find all movies that a user has watched
export const findAllMoviesThatAUserWatched = async (userId: number) => {
  return prisma.$queryRaw`
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
