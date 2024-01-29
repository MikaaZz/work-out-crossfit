"use server";

export async function createUser(name: String, email: String) {
  try {
    const user = {
      name: name ?? "No name register",
      email: email ?? "No e-mail register",
    };
    const response = await fetch("http://localhost:3000/api/v1/user", {
      method: "POST",
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (e) {
    throw new Error(`Error in create user: ${e}`);
  }
}
