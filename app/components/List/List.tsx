import { getUsers } from "@/app/actions/user/getUsers";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { User } from "@prisma/client";
import { unstable_cache, unstable_noStore } from "next/cache";

export default async function UsersList() {
  unstable_noStore();
  const users: User[] = await getUsers();

  return (
    <ul className={cn("flex flex-col gap-2")}>
      {users.map((user) => (
        <li key={user.id} style={{ display: "flex", gap: "12px" }}>
          <Card className={cn("w-[380px]")}>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{user.email}</CardDescription>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
}
