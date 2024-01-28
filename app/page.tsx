import { getUsersData } from "./actions/getUserData";
import RegisterForm from "./ui/Register/Register";

export default async function Home() {
  const data = await getUsersData();
  const { user, users } = data;

  return (
    <main>
      <h1>Hello, {user?.name}</h1>
      <h2>Users</h2>

      <RegisterForm users={users} />
    </main>
  );
}
