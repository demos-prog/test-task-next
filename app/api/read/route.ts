import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import db from "@/db/connection";

export async function GET(request: NextRequest) {
  try {
    const collection = db.collection("products");
    const results = await collection.find({}).toArray();
    return NextResponse.json(results);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
