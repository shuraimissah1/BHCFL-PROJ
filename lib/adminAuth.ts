import { NextResponse } from "next/server";

export function requireAdminApi(request: Request) {
  const token = request.headers.get("x-admin-token");
  const expected = process.env.ADMIN_API_TOKEN || "";
  if (!expected || token !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
