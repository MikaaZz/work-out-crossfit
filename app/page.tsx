import { Suspense } from "react";
import { getLoggedUser } from "./actions/user/getLoggedUser";

import Form from "./ui/Form/Form";
import UsersList from "./ui/List/List";

export default async function Home() {
  const user = await getLoggedUser(1);

  return (
    <section>
      <h1>Hello, {user?.name}</h1>
      <h2>Users</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <UsersList />
      </Suspense>
      <Form />
    </section>
  );
}
