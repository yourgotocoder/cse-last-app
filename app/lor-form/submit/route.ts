"use server";
import { dbConnect } from "@/lib/db/dbConnect";
import LoRRequestModel from "@/lib/db/models/LoRRequest.model";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();
  const formData = await request.json();
  const requestData = {
    name: formData.name,
  };
  const pendingData = new LoRRequestModel({
    name: requestData.name,
    email: "",
    regno: 0,
    phone: "",
    createdAt: new Date(),
  });
  await pendingData.save();

  return Response.json({ message: "Saved successfully" });
}
