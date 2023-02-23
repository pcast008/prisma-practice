import { prisma } from "./prisma";

// Deleting a thing, only works swell, if things that reference it are deleted as well
// this is because a favorite references the user via a foreign key
export const deleteAllUsersWithAgeUnderN = async (n: number) => {};
