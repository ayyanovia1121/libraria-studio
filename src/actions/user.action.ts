import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

export const updateUserActivity = async (userId: string) => {
  const today = new Date().toISOString().slice(0, 10);

  const user = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  if (user[0].lastActivityDate === today) return;

  await db
    .update(users)
    .set({ lastActivityDate: today })
    .where(eq(users.id, userId));
};
