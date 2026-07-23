import { NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { notifyTelegram } from "@/lib/telegram";
export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json({ error: "Invalid request" }, { status: 415 });
  try {
    const parsed = appointmentSchema.safeParse(await request.json());
    if (!parsed.success || parsed.data.website)
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    const data = parsed.data;
    if (supabaseAdmin) {
      const { error } = await supabaseAdmin
        .from("appointments")
        .insert({
          name: data.name,
          phone: data.phone,
          comment: data.comment || null,
          user_agent: request.headers.get("user-agent"),
        });
      if (error) {
        console.error("Appointment storage error", error);
        return NextResponse.json(
          { error: "Unable to save appointment" },
          { status: 503 },
        );
      }
    } else {
      console.warn("Appointment received but Supabase is not configured");
    }
    try {
      await notifyTelegram(data);
    } catch (error) {
      console.error("Telegram notification error", error);
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Appointment request error", error);
    return NextResponse.json(
      { error: "Unable to process appointment" },
      { status: 500 },
    );
  }
}
