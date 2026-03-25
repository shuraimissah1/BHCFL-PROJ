import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function GET(request: Request, { params }: { params: any }) {
  const { id } = await Promise.resolve(params);
  const rec = await prisma.recording.findUnique({ where: { id } });
  if (!rec) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(rec);
}

export async function PUT(request: Request, { params }: { params: any }) {
  try {
    const auth = require("../../../../../lib/adminAuth");
    const check = auth.requireAdminApi(request);
    if (check) return check;
    const { id } = await Promise.resolve(params);
    const body = await request.json();
    const updated = await prisma.recording.update({ where: { id }, data: body });
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
    await prisma.recording.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
