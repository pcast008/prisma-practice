import { prisma } from "./prisma";

export const createUserWithData = async ({
  username,
  age,
}: {
  username: string;
  age: number;
}) => {
  return prisma.$queryRaw`
    insert into User (username, age)
    values (${username}, ${age});
    `;
};
