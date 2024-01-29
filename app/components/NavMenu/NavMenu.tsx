"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signIn, signOut, useSession } from "next-auth/react";

export default function NavMenu() {
  const { data: session } = useSession();

  function handleClick() {
    session?.user ? signOut() : signIn();
  }

  return (
    <div
      className={cn(
        "min-w-72 flex justify-center items-center flex-col gap-2 py-2",
      )}
    >
      <p>{session?.user?.name ? session?.user?.name : "User not logged in"}</p>
      <Button onClick={handleClick}>Sign in</Button>
    </div>
  );
}
