import { NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prisma";

export async function GET(request: Request, { params }: { params: any }) {
  try {
    // admin only
    const auth = require("../../../../../../../lib/adminAuth");
    const check = auth.requireAdminApi(request);
    if (check) return check;

    const { id } = await Promise.resolve(params);
    const list = await (prisma as any).rSVP.findMany({ where: { sessionId: id }, orderBy: { createdAt: "asc" } });
    return NextResponse.json(list);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
