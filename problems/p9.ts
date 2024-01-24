import { prisma } from "./prisma";

export const updateUsername = async (userId: number, newUsername: string) => {
  return prisma.$queryRaw`
        update User
        set username = ${newUsername}
        where id = ${userId};
    `;
};
