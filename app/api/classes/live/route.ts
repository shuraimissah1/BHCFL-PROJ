import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

function parseDateLike(val: any): Date | null {
  if (!val) return null;
  if (val instanceof Date) return isNaN(val.getTime()) ? null : val;
  // Accept strings like "YYYY-MM-DDTHH:mm" (from datetime-local) by appending seconds
  if (typeof val === "string") {
    // If already full ISO with seconds/zone, new Date() should parse it
    let d = new Date(val);
    if (!isNaN(d.getTime())) return d;
    // If missing seconds (e.g. "2026-03-09T20:54") try appending ":00"
    const maybe = new Date(val + ":00");
    if (!isNaN(maybe.getTime())) return maybe;
  }
  return null;
}

export async function GET() {
  const sessions = await prisma.liveSession.findMany({
    orderBy: { start: "asc" },
  });

  return NextResponse.json(sessions);
}

export async function POST(request: Request) {
  try {
    const auth = require("../../../../lib/adminAuth");
    const check = auth.requireAdminApi(request);
    if (check) return check;
    const body = await request.json();
    const { title, description, start, end, provider, joinUrl, visibility, capacity } = body;
    if (!title || !start || !end) {
      return NextResponse.json({ error: "title, start and end are required" }, { status: 400 });
    }

    const parsedStart = parseDateLike(start);
    const parsedEnd = parseDateLike(end);
    if (!parsedStart || !parsedEnd) {
      return NextResponse.json({ error: "Invalid start or end datetime" }, { status: 400 });
    }

    const created = await prisma.liveSession.create({
      data: {
        title,
        description: description || null,
        start: parsedStart,
        end: parsedEnd,
        provider: provider || null,
        joinUrl: joinUrl || null,
        visibility: visibility || "public",
        capacity: capacity ?? null,
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
