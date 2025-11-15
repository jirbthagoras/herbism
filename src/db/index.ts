import { drizzle } from "drizzle-orm/postgres-js";
import { config } from "dotenv";
import * as userSchema from "./user.schema";
import * as profileSchema from "./profile.schema";

config({
  path: "./.env",
});

export const db = drizzle({
  connection: process.env.DATABASE_URL!,
  casing: "snake_case",
  schema: {
    ...userSchema,
    ...profileSchema,
  },
});
