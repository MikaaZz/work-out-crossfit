"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { createUser } from "@/app/actions/user/createUser";

export default function Form() {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      await createUser(formData);

      router.refresh();
    } catch (e) {
      throw new Error(`Error in form create user ${e}`);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" required />
      <input type="email" name="email" required />

      <button>Lets create another user</button>
    </form>
  );
}
