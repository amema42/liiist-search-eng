import { neon } from "@neondatabase/serverless";
import {drizzle} from "drizzle-orm/neon-http"

// if (!process.env.DATABASE_URL!) {
//     throw new Error("DATABASE_URL is missing in the environment variables.");
// }
  
const connector = neon(process.env.DATABASE_URL!);
console.log("DATABASE_URL:", process.env.DATABASE_URL);

export const db = drizzle(connector);
  
