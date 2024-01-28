import { prisma } from "@/lib/prisma";

test("POST user in database", async () => {
  const userTableSize = await prisma.user.count();
  const user = {
    email: `mikhael@teste${userTableSize}.com`,
    name: "mikhael zz",
  };

  const response = await fetch("http://localhost:3000/api/v1/user", {
    method: "POST",
    body: JSON.stringify(user),
  });

  expect(response.status).toBe(200);
  const savedUser = await response.json();
  expect(savedUser).toHaveProperty("uid");
  expect(savedUser).toHaveProperty("email");
  expect(savedUser).toHaveProperty("name");
});
