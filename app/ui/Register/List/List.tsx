import { User } from "@prisma/client";

export default function UsersList({ users }: { users: User[] }) {
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
