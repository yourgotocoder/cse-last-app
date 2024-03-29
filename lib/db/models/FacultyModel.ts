import { Model, Schema } from "mongoose";
import createModel from "../utils/createModel";

export interface IFaculty {
  email: string;
  name: string;
  emp_code: number;
  password: string;
  phone: number[];
  createdAt: Date;
}

type FacultyModel = Model<IFaculty, {}>;

const FacultySchema = new Schema<IFaculty, FacultyModel>({
  email: String,
  name: String,
  emp_code: Number,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  phone: [Number],
});

export default createModel<IFaculty, FacultyModel>("faculties", FacultySchema);
