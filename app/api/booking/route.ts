import { NextResponse } from "next/server";
import { validateBooking } from "@/lib/booking";
import { getDb } from "@/lib/mongodb";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // honeypot: real students never see or fill this field
  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const { data, errors } = validateBooking(body);
  if (!data) return NextResponse.json({ ok: false, errors }, { status: 422 });

  try {
    const db = await getDb();
    await db.collection("bookings").insertOne({
      ...data,
      status: "new",
      createdAt: new Date(),
      userAgent: req.headers.get("user-agent")?.slice(0, 200) ?? null,
    });
  } catch (err) {
    console.error("[booking] save failed:", err);
    return NextResponse.json(
      { ok: false, error: "বুকিং সেভ করা যায়নি। একটু পরে আবার চেষ্টা করো অথবা কল করো।" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
