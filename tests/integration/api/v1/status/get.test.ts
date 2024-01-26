test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(
    "https://3000-monospace-tecnology-news-1706008415363.cluster-nxnw2gov3naqkvuxb437f67u5e.cloudworkstations.dev/api/v1/status",
  );
  expect(response.status).toBe(200);
});
