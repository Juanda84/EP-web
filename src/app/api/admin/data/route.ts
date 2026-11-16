import { NextRequest, NextResponse } from "next/server";
import { readStore, writeStore, type SiteData } from "@/lib/store";

export async function GET() {
  return NextResponse.json(readStore());
}

export async function PUT(req: NextRequest) {
  const body = (await req.json()) as SiteData;
  writeStore(body);
  return NextResponse.json({ ok: true });
}
