import { Model, Schema } from "mongoose";
import createModel from "../utils/createModel";

interface IFaculty {
  email: string;
  name: string;
  emp_code: number;
  password: string;
  phone: number[];
  createdAt: Date;
}

type FacultyModel = Model<IFaculty, {}>;

const FacultySchema = new Schema<IFaculty, FacultyModel>(
  {
    email: String,
    name: String,
    emp_code: Number,
    password: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    phone: [Number],
  },
  {
    collection: "faculty-data",
  },
);

export default createModel<IFaculty, FacultyModel>(
  "faculty-data",
  FacultySchema,
);
