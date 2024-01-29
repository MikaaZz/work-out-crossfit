import { prisma } from "@/lib/prisma";

export async function getLoggedUser(userUid: number) {
  const user = await prisma.user.findFirst({
    where: {
      id: "",
    },
  });

  return user;
}
