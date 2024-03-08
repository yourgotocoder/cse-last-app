import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class Faculty {
  @prop({ default: () => nanoid(9) })
  _id: string;

  @prop()
  name: string;

  @prop()
  email: string;

  @prop()
  password: number;

  @prop()
  emp_code: number;
}
