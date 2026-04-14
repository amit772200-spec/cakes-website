import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { createHash } from "crypto";

function isAuthorized(token: string | undefined): boolean {
  const password = process.env.ADMIN_PASSWORD;
  if (!password || !token) return false;
  const expected = createHash("sha256").update(password).digest("hex");
  return token === expected;
}

export async function GET(req: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!isAuthorized(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ leads: data });
}
