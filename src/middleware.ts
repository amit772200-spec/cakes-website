import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only protect /admin routes (not /admin/login)
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const token = req.cookies.get("admin_token")?.value;
    const password = process.env.ADMIN_PASSWORD || "RACHEL123";

    if (token) {
      const expected = createHash("sha256").update(password).digest("hex");
      if (token === expected) return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
