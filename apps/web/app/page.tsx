import { prisma } from "@repo/db/prisma";

export default async function Home() {
  const user = await prisma.user.findFirst();

  return (
    <div>
      {user?.username}
      <br />
      {user?.password}
      <br />
      fetched
    </div>
  );
}
