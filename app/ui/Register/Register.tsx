"use client";
import { useState } from "react";
import { User } from "@prisma/client";

import { createUser } from "@/app/actions/createUser";
import Form from "./Form/Form";
import UsersList from "./List/List";

export default function RegisterForm({ users }: { users: User[] }) {
  const [usersUI, setUsersUI] = useState<User[]>(users);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const user = {
        uid: Math.random(),
        name: formData.get("name") as string,
        email: formData.get("email") as string,
      };

      createUser(user).then((user) => {
        setUsersUI([...users, user]);
      });
    } catch (e) {
      throw new Error(`Error in onSubmit to create User: ${e}`);
    }
  };

  return (
    <div>
      <UsersList users={usersUI} />
      <Form
        handleSubmit={
          handleSubmit as (e: React.FormEvent<HTMLFormElement>) => void
        }
      />
    </div>
  );
}
