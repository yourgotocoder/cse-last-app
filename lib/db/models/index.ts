import { Pending } from "./LoRRequest.model";
import { Faculty } from "./FacultyModel";
import { getModelForClass } from "@typegoose/typegoose";

export const PendingModel = getModelForClass(Pending);
export const FacultyModel = getModelForClass(Faculty);
