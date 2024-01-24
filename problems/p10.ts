import { prisma } from "./prisma";

// Deleting a thing, only works swell, if things that reference it are deleted as well
export const deleteAllUsersWithAgeUnderN = async (n: number) => {
  return prisma.$queryRaw` 
    delete from User
    where age < ${n};`;
};
