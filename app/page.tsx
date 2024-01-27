"use client";
import { useState } from "react";
import { User } from "@prisma/client";
import { createUser } from "./api/v1/user";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  const insertUser = async () => {
    createUser();
  };
  const fetchUsers = async () => {
    const response = await fetch("/api/v1/users");
    console.log(response);
    const users = await response.json();
    setUsers(users);
  };

  fetchUsers();

  return (
    <main>
      <h1>Teste</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.uid}>{user.name}</li>
        ))}
      </ul>
      <button onClick={insertUser}>Criar usuário</button>
    </main>
  );
}
