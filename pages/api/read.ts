import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../db/connection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const collection = db.collection("posts");
    const results = await collection.find({}).toArray();
    return res.status(200).json(results);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
