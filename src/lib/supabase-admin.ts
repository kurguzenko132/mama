import { createClient } from "@supabase/supabase-js";
import { serverEnv } from "./env";
export const supabaseAdmin=serverEnv.SUPABASE_URL&&serverEnv.SUPABASE_SERVICE_ROLE_KEY?createClient(serverEnv.SUPABASE_URL,serverEnv.SUPABASE_SERVICE_ROLE_KEY,{auth:{persistSession:false}}):null;
