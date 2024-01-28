import { getUsersData } from "@/app/actions/getUserData";

test("GET users in database", async () => {
  const response = await getUsersData();
  const { user, users } = response;

  expect(user).toContainEqual({
    email: "test@test.com",
    name: "Test user",
    uid: "1",
  });
});
