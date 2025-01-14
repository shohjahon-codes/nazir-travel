import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = (await cookies()).get("token")?.value;


  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }


  return NextResponse.next();
}


export const config = {
  matcher: ["/product/:path*", "/profile/:path*"],
};
