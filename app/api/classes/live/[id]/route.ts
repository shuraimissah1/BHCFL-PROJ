import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

function parseDateLike(val: any): Date | null {
  if (!val) return null;
  if (val instanceof Date) return isNaN(val.getTime()) ? null : val;
  if (typeof val === "string") {
    let d = new Date(val);
    if (!isNaN(d.getTime())) return d;
    const maybe = new Date(val + ":00");
    if (!isNaN(maybe.getTime())) return maybe;
  }
  return null;
}

export async function GET(request: Request, { params }: { params: any }) {
  const { id } = await Promise.resolve(params);
  const s = await prisma.liveSession.findUnique({ where: { id } });
  if (!s) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(s);
}

export async function PUT(request: Request, { params }: { params: any }) {
  try {
    const auth = require("../../../../../lib/adminAuth");
    const check = auth.requireAdminApi(request);
    if (check) return check;
    const { id } = await Promise.resolve(params);
    const body = await request.json();
    // If the body contains start/end datetimes (from datetime-local), parse them to Date objects
    const data: any = { ...body };
    if (body.start) {
      const ps = parseDateLike(body.start);
      if (!ps) return NextResponse.json({ error: "Invalid start datetime" }, { status: 400 });
      data.start = ps;
    }
    if (body.end) {
      const pe = parseDateLike(body.end);
      if (!pe) return NextResponse.json({ error: "Invalid end datetime" }, { status: 400 });
      data.end = pe;
    }

    const updated = await prisma.liveSession.update({ where: { id }, data });
    return NextResponse.json(updated);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: any }) {
  try {
    const auth = require("../../../../../lib/adminAuth");
    const check = auth.requireAdminApi(request);
    if (check) return check;
    const { id } = await Promise.resolve(params);
    await prisma.liveSession.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
