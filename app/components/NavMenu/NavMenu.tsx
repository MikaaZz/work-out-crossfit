"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signIn, signOut, useSession } from "next-auth/react";
import LoggedItens from "./LoggedItens";
import NotLoggedItens from "./NotLoggedItens";

export default function NavMenu() {
  const { data: session } = useSession();

  function handleClick() {
    session ? signOut() : signIn();
  }

  return (
    <div
      className={cn(
        "bg-slate-700 h-screen min-w-72 flex justify-start items-start flex-col gap-2 p-2",
      )}
    >
      <h2
        className={cn(
          "text-xl bg-slate-600 py-1 px-4 rounded-sm text-gray-200 w-full text-center",
        )}
      >
        {session?.user?.name ? session?.user?.name : "User not logged in"}
      </h2>
      {session ? <LoggedItens /> : <NotLoggedItens />}
      <Button className={cn("w-full")} onClick={handleClick}>
        {session ? "Sign out" : "Sign in"}
      </Button>
    </div>
  );
}
