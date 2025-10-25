import { updateUserActivity } from "@/actions/user.action";
import { auth } from "@/auth";
import Header from "@/components/custom/common/header";
import { redirect } from "next/navigation";
import { after } from "next/server";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session) redirect("/sign-in");

  after(async () => {
    if (!session?.user?.id) return;
    await updateUserActivity(session.user.id);
  });
  return (
    <main className="root-container">
      <div className="mx-auto max-w-7xl">
        <Header session={session} />
        <div className="mt-20 pb-20">{children}</div>
      </div>
    </main>
  );
};

export default HomeLayout;
