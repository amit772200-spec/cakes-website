import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || password !== adminPassword) {
    return NextResponse.json({ error: "סיסמא שגויה" }, { status: 401 });
  }

  const token = createHash("sha256").update(adminPassword).digest("hex");

  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_token", "", { maxAge: 0, path: "/" });
  return res;
}
