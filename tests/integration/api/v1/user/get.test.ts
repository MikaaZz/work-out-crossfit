test("GET to /api/v1/user should return user", async () => {
  const response = await fetch(
    "https://refactored-space-waffle-gv4xwr4x5gw2v9rx-3000.app.github.dev/api/v1/user",
  );
  console.log("response", response);
  expect(response.status).toBe(200);
});
