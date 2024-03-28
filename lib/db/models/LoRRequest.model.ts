import { Model, ObjectId, Schema } from "mongoose";
import createModel from "../utils/createModel";

interface ILoRRequest {
  email: string;
  name: string;
  regno?: number;
  phone: string;
  createdAt: Date;
  faculty: ObjectId;
  status: "not-viewed" | "pending" | "approved" | "rejected";
  viewedAt?: Date;
}

type LoRRequestModel = Model<ILoRRequest, {}>;

const LoRRequestSchema = new Schema<ILoRRequest, LoRRequestModel>({
  email: String,
  name: String,
  regno: Number,
  phone: String,
  createdAt: Date,
  faculty: {
    type: Schema.Types.ObjectId,
    ref: "faculties",
  },
  status: String,
  viewedAt: Date,
});

export default createModel<ILoRRequest, LoRRequestModel>(
  "pending-lors",
  LoRRequestSchema,
);
