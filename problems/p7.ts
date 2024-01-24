import { prisma } from "./prisma";

export const getAverageScoreForUser = async (userId: number) => {
  const result = await prisma.$queryRaw<{ score: number }[]>`
    select 
        avg(score) as score
    from 
        StarRating
    where
        userID = ${userId}`;

  return result[0].score;
};
