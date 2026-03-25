import { NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prisma";
import crypto from "crypto";
import nodemailer from "nodemailer";

// Minimal, clean RSVP POST handler (rate-limit + email fallback)
const RATE_LIMIT_WINDOW = 1000 * 60 * 60; // 1 hour
const RATE_LIMIT_MAX = 10;
const rl = new Map<string, { count: number; first: number }>();

function getIp(request: Request) {
  return (request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "local") as string;
}

let _etherealAccount: any | null = null;

async function sendAttendEmail(opts: { to: string; name?: string | null; attendLink: string; sessionTitle?: string | null; joinUrl?: string | null }) {
  const { to, name, attendLink, sessionTitle, joinUrl } = opts;
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  // Normalize From header: strip surrounding quotes if present and ensure we have a fallback
  function _stripQuotes(s?: string) {
    if (!s) return s;
    return s.replace(/^"|"$/g, "");
  }
  let from = _stripQuotes(process.env.EMAIL_FROM) || _stripQuotes(process.env.SMTP_FROM) || `no-reply@${process.env.APP_DOMAIN || "example.com"}`;
  // If the from value looks like just a hostname or malformed, provide a sensible display name
  if (!from.includes("@")) {
    from = `BHCFL <${from}>`;
  }

  const subject = `Your access link for ${sessionTitle || "BHCFL Live Session"}`;
  // Include both the secure attend link and, optionally, the direct join URL (Zoom) for convenience.
  const textLines = [`Hello ${name || ""},`, `Use this secure join link: ${attendLink}`];
  if (joinUrl) textLines.push(`(Direct join URL if needed): ${joinUrl}`);
  const text = textLines.join("\n\n");

  let html = `<p>Hello ${name || ""},</p><p>Use this secure join link: <a href="${attendLink}">${attendLink}</a></p>`;
  if (joinUrl) html += `<p>If needed, you can also join directly: <a href="${joinUrl}">${joinUrl}</a></p>`;

  // If SMTP is configured, use it. Otherwise, fall back to Ethereal test account so devs can view the message.
  if (smtpHost && smtpPort && smtpUser && smtpPass) {
    const transporter = nodemailer.createTransport({ host: smtpHost, port: smtpPort, secure: smtpPort === 465, auth: { user: smtpUser, pass: smtpPass } });
    try {
      const info = await transporter.sendMail({ from, to, subject, text, html });
      return { emailed: true, messageId: info.messageId };
    } catch (err: any) {
      console.error("Failed to send mail via SMTP:", err);
      throw err;
    }
  }

  // No SMTP configured — create or reuse an Ethereal test account and send via Ethereal
  if (!_etherealAccount) {
    console.warn("SMTP not configured; creating Ethereal test account to deliver test email.");
    _etherealAccount = await nodemailer.createTestAccount();
  }
  const transporter = nodemailer.createTransport({ host: _etherealAccount.smtp.host, port: _etherealAccount.smtp.port, secure: _etherealAccount.smtp.secure, auth: { user: _etherealAccount.user, pass: _etherealAccount.pass } });
  const info = await transporter.sendMail({ from, to, subject, text, html });
  const previewUrl = nodemailer.getTestMessageUrl(info) || null;
  return { emailed: false, previewUrl };
}

export async function POST(request: Request, { params }: { params: any }) {
  const { id } = await params;
  const ip = getIp(request);

  // rate limiting
  const now = Date.now();
  const entry = rl.get(ip);
  if (entry) {
    if (now - entry.first < RATE_LIMIT_WINDOW) {
      if (entry.count >= RATE_LIMIT_MAX) return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
      entry.count++;
    } else {
      rl.set(ip, { count: 1, first: now });
    }
  } else {
    rl.set(ip, { count: 1, first: now });
  }

  try {
    const body = await request.json();
    const { name, email } = body;
    if (!email) return NextResponse.json({ error: "email required" }, { status: 400 });

    const session = await prisma.liveSession.findUnique({ where: { id } });
    if (!session) return NextResponse.json({ error: "session not found" }, { status: 404 });

    const existing = await (prisma as any).rSVP.findFirst({ where: { sessionId: id, email } });
    let token = existing ? existing.token : crypto.randomBytes(16).toString("hex");
    if (!existing) {
      await (prisma as any).rSVP.create({ data: { sessionId: id, name: name || null, email, token } });
    }

    const origin = new URL(request.url).origin;
    const attendLink = `${origin}/api/classes/live/${id}/attend?token=${token}`;

  const sendResult = await sendAttendEmail({ to: email, name: name || null, attendLink, sessionTitle: session.title, joinUrl: session.joinUrl || null });
    if (sendResult && (sendResult as any).previewUrl) {
      // Ethereal preview (dev)
      return NextResponse.json({ success: true, attendLink, previewUrl: (sendResult as any).previewUrl, message: "Test email sent (Ethereal)." }, { status: 201 });
    }

    if (sendResult && (sendResult as any).emailed) {
      return NextResponse.json({ success: true, message: "RSVP successful — check your email for the join link." }, { status: 201 });
    }

    // Fallback: return attend link when we couldn't send (shouldn't reach here)
    return NextResponse.json({ success: true, attendLink, message: "RSVP stored; attend link returned." }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "failed to create rsvp" }, { status: 500 });
  }
}

// RECOVERY CODE: EJTU1A8TWKYZLMAS4KDYWS6L
// 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