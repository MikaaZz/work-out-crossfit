import "@/styles/globals.css";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <section>
      <h1>Manage your life.</h1>
      <h2>Control your future</h2>
      <p>Create a free account and start to save money and be Fitnes</p>
    </section>
  );
}
