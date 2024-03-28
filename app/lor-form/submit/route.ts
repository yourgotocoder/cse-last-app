"use server";
import { dbConnect } from "@/lib/db/dbConnect";
import { LoRRequestModel } from "@/lib/db/models";
import FacultyModel from "@/lib/db/models/FacultyModel";
import MailService from "@/lib/sendMail";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();
  const formData = await request.json();
  const time = new Date();
  const IST = time.toLocaleString("en-IN");
  // const pendingData = new LoRRequestModel({
  //   name: formData.name,
  //   email: formData.email,
  //   regno: +formData.regno,
  //   phone: formData.phone,
  //   faculty: formData.faculty,
  //   createdAt: new Date(),
  // });
  const faculty = await FacultyModel.findById(formData.faculty);
  console.log(faculty);
  // await pendingData.save();
  // const mailService = MailService.getInstance();
  // await mailService.createConnection();
  // await mailService.sendMail(IST, {
  //   from: "",
  //   to: "sudarshan.r@smit.smu.edu.in",
  //   html: "Hello",
  //   subject: "Testing",
  // });
  return Response.json({ message: "Saved successfully" });
}
