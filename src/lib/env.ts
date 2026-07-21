import { z } from "zod";
const schema=z.object({SUPABASE_URL:z.string().url().optional(),SUPABASE_SERVICE_ROLE_KEY:z.string().min(1).optional(),TELEGRAM_BOT_TOKEN:z.string().min(1).optional(),TELEGRAM_CHAT_ID:z.string().min(1).optional()});
export const serverEnv=schema.parse({SUPABASE_URL:process.env.SUPABASE_URL,SUPABASE_SERVICE_ROLE_KEY:process.env.SUPABASE_SERVICE_ROLE_KEY,TELEGRAM_BOT_TOKEN:process.env.TELEGRAM_BOT_TOKEN,TELEGRAM_CHAT_ID:process.env.TELEGRAM_CHAT_ID});
