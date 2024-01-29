import { getUsers } from "@/app/actions/user/getUsers";
import { User } from "@prisma/client";
import { unstable_cache, unstable_noStore } from "next/cache";

export default async function UsersList() {
  unstable_noStore();
  const users: User[] = await getUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.uid} style={{ display: "flex", gap: "12px" }}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
}
