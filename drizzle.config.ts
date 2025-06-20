import { type Config } from "drizzle-kit";

import { env } from "2/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["drive-clone_*"],
} satisfies Config;
