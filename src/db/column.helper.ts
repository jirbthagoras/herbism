import * as t from "drizzle-orm/pg-core";

export const timestamps = {
  updated_at: t.timestamp(),
  created_at: t.timestamp().defaultNow().notNull(),
};

export const roleEnum = t.pgEnum("roles", ["user"]);
