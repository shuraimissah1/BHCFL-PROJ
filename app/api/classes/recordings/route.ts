import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET() {
  const recordings = await prisma.recording.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(recordings);
}

export async function POST(request: Request) {
  try {
    const auth = require("../../../../lib/adminAuth");
    const check = auth.requireAdminApi(request);
    if (check) return check;
    const body = await request.json();
    const { title, youtubeUrl, thumbnail, duration, description, visibility } = body;
    if (!title || !youtubeUrl) {
      return NextResponse.json({ error: "title and youtubeUrl are required" }, { status: 400 });
    }

    const created = await prisma.recording.create({
      data: {
        title,
        youtubeUrl,
        thumbnail: thumbnail || null,
        duration: duration || null,
        description: description || null,
        visibility: visibility || "public",
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
