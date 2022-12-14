import "dotenv/config";
import { config } from "@keystone-6/core";
import { lists } from "./schema";
import { withAuth, session } from "./auth";

export default withAuth(
  config({
    db: {
      provider: "postgresql",
      url: process.env.SUPABASE_DB_URL || "",
    },
    lists,
    session,
  })
);
