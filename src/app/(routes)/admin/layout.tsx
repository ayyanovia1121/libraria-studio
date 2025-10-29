import "@/styles/admin.css";

import { auth } from "@/auth";
import Header from "@/components/custom/admin/Header";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import Sidebar from "@/components/custom/admin/Sidebar";

const AdminLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (!session?.user?.id) redirect("/sign-in");

  // TODO: check if user is admin
  // const isAdmin = await db
  //   .select({ isAdmin: users.role })
  //   .from(users)
  //   .where(eq(users.id, session.user.id))
  //   .limit(1)
  //   .then((res) => res[0]?.isAdmin === "ADMIN");

  //   if (!isAdmin) redirect("/");
  return (
    <main className="flex min-h-screen w-full flex-row">
      <Sidebar session={session} />

      <div className="admin-container">
        <Header session={session} />
        {children}
      </div>
    </main>
  );
};

export default AdminLayout;
