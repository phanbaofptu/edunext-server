const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Class = require("./Class");
const User = require("./User");

const Course = new Schema(
  {
    _courseId: { type: Number },
    code: { type: String, required: true, uppercase: true },
    name: { type: String, required: true },
    mentorId: { type: Number, ref: "User" },
    classId: { type: Number, ref: "Class" },
    studentId: [{ type: Number, ref: "User" }],
  },
  { _id: false, timestamps: true }
);

//Add plugin

Course.plugin(AutoIncrement, { id: "_courseId" });
Course.plugin(mongooseDelete, {
  overrideMethods: "all",
  deletedAt: true,
});

module.exports = mongoose.model("Course", Course);
