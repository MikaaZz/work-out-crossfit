import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser() {
  await prisma.user.create({
    data: {
      uid: "123",
      name: "Alice",
      email: "",
    },
  });
}

export async function listUsers() {
  const users = await prisma.user.findMany();
  return users;
}

async function user(request, response) {
  const users = await listUsers();
  response.json(users);
}

export default user;
