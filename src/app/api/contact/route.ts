import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, cake_name, message } = body;

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "שדות חובה חסרים" }, { status: 400 });
    }

    // ── Save to Supabase ──────────────────────────────────
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { error } = await supabase.from("leads").insert({
        name,
        phone,
        email,
        cake_name: cake_name || null,
        message: message || null,
      });
      if (error) console.error("Supabase error:", error.message);
    }

    // ── Send email via Resend ─────────────────────────────
    const resendKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL;

    if (resendKey && adminEmail) {
      const resend = new Resend(resendKey);
      const dateStr = new Date().toLocaleString("he-IL", { timeZone: "Asia/Jerusalem" });

      await resend.emails.send({
        from: "Rachel Bakery <onboarding@resend.dev>",
        to: adminEmail,
        subject: `🎂 ליד חדש: ${name}`,
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #FFF8F9;">
            <h2 style="color: #9d4867; border-bottom: 2px solid #F8BBD0; padding-bottom: 10px;">פנייה חדשה מהאתר 🎂</h2>
            <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
              <tr style="background:#FFD8E4">
                <td style="padding:10px 14px; font-weight:bold;">שם מלא</td>
                <td style="padding:10px 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 14px; font-weight:bold;">טלפון</td>
                <td style="padding:10px 14px;">${phone}</td>
              </tr>
              <tr style="background:#FFD8E4">
                <td style="padding:10px 14px; font-weight:bold;">מייל</td>
                <td style="padding:10px 14px;">${email}</td>
              </tr>
              ${cake_name ? `<tr><td style="padding:10px 14px; font-weight:bold;">עוגה שהתעניינ/ה בה</td><td style="padding:10px 14px;">${cake_name}</td></tr>` : ""}
              ${message ? `<tr style="background:#FFD8E4"><td style="padding:10px 14px; font-weight:bold;">הודעה</td><td style="padding:10px 14px;">${message}</td></tr>` : ""}
              <tr>
                <td style="padding:10px 14px; font-weight:bold;">תאריך ושעה</td>
                <td style="padding:10px 14px;">${dateStr}</td>
              </tr>
            </table>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "שגיאה בשרת" }, { status: 500 });
  }
}
