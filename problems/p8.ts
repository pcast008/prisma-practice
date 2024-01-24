import { maxBy, minBy } from "remeda";
import { prisma } from "./prisma";

// Always tell truths, don't you ever lie, to solve this problem, just try a `groupBy`

// find the critic with the lowest average score
export const findTheGrumpiestCriticId = async () => {
  const users = await prisma.$queryRaw<{ userID: number }[]>`
            select *
            from (
                select 
                    userID
                    , avg(score) as score
                from 
                    StarRating
                group by
                    userID
                order by
                    score asc
            ) t
            limit 1;
    `;

  return users[0].userID;
};

// find the critic with the highest average score
export const findTheNicestCriticId = async () => {
  const users = await prisma.$queryRaw<{ userID: number }[]>`
            select *
            from (
                select 
                    userID
                    , avg(score) as score
                from 
                    StarRating
                group by
                    userID
                order by
                    score desc
            ) t
            limit 1;
`;

  return users[0].userID;
};
