import { prisma } from "./prisma";

// Get the average age of all users
// hint: the hot tub is hot, the water is great, to solve this problem you should "aggregate"
export const getAverageUserAge = async () => {
  const averageAge = await prisma.$queryRaw<[{ age: number }]>`
    select avg(age) as age
    from User;
  `;
  return averageAge[0].age;
};
