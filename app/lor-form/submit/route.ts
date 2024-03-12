"use server";
import { dbConnect } from "@/lib/db/dbConnect";
import { LoRRequestModel } from "@/lib/db/models";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();
  const formData = await request.json();

  const pendingData = new LoRRequestModel({
    name: formData.name,
    email: "",
    regno: 0,
    phone: "",
    createdAt: new Date(),
  });
  await pendingData.save();

  return Response.json({ message: "Saved successfully" });
}
