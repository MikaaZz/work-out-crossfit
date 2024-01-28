import { prisma } from "@/lib/prisma";

export async function getUsersData() {
  const user = await prisma.user.findFirst({
    where: {
      email: "test@test.com",
    },
  });
  const users = await prisma.user.findMany();

  return { user, users };
}
