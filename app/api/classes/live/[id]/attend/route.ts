import { NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prisma";

export async function GET(request: Request, { params }: { params: any }) {
  try {
    const { id } = await Promise.resolve(params);
    const url = new URL(request.url);
    const token = url.searchParams.get("token");
    if (!token) return NextResponse.json({ error: "token required" }, { status: 400 });

    const rsvp = await (prisma as any).rSVP.findUnique({ where: { token } });
    if (!rsvp || rsvp.sessionId !== id) return NextResponse.json({ error: "invalid token" }, { status: 403 });

    const session = await prisma.liveSession.findUnique({ where: { id } });
    if (!session || !session.joinUrl) return NextResponse.json({ error: "session not available" }, { status: 404 });

    // mark used
    await (prisma as any).rSVP.update({ where: { id: rsvp.id }, data: { used: true, usedAt: new Date() } });

    // redirect to the provider join URL (Zoom)
    return NextResponse.redirect(session.joinUrl);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "failed to validate" }, { status: 500 });
  }
}
