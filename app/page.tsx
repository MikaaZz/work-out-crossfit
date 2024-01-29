import "@/styles/globals.css";
import { Suspense } from "react";

import Form from "./components/Form/Form";
import UsersList from "./components/List/List";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <section>
      <h1>
        Hello, {session?.user?.name ? session?.user?.name : "Not logged user"}
      </h1>
      <h2>This is the list of users in my app:</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <UsersList />
      </Suspense>
      <Form />
    </section>
  );
}
