"use server";

export async function getUsers() {
  try {
    const response = await fetch("http://localhost:3000/api/v1/user", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (e) {
    throw new Error(`Error in get users: ${e}`);
  }
}
