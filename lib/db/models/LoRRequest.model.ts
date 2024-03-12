import { Model, Schema } from "mongoose";
import createModel from "../utils/createModel";

interface ILoRRequest {
  email: string;
  name: string;
  regno?: number;
  phone: string;
  createdAt: Date;
}

type LoRRequestModel = Model<ILoRRequest, {}>;

const LoRRequestSchema = new Schema<ILoRRequest, LoRRequestModel>({
  email: String,
  name: String,
  regno: Number,
  phone: String,
  createdAt: Date,
});

export default createModel<ILoRRequest, LoRRequestModel>(
  "lor-pending",
  LoRRequestSchema,
);
