import * as t from "drizzle-orm/pg-core";
import { users } from "./user.schema";

export const profile = t.pgTable("profiles", {
  userId: t.integer().references((): t.AnyPgColumn => users.id),
});
