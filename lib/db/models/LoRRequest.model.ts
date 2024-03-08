import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class Pending {
  @prop({ default: () => nanoid(9) })
  _id: string;

  @prop()
  name: string;

  @prop()
  email: string;

  @prop()
  regno: number;
}
