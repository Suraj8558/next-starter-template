import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const country = request.headers.get("cf-ipcountry") || "IN"

  console.log("[middleware] cf-ipcountry header:", request.headers.get("cf-ipcountry"))
  console.log("[middleware] resolved country:", country)

  const response = NextResponse.next()

  response.cookies.set("country", country, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  })

  return response
}
