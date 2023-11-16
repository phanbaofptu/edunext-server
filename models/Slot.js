const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Course = require("./Course");
const Question = require("./Question");

const Slot = new Schema(
  {
    _slotId: { type: Number },
    courseId: { type: Number, ref: "Course" },
    code: { type: String, required: true },
    name: { type: String, required: true },
    questionId: [{ type: Number, ref: "Question" }],
    assignmentId: [{ type: Number, ref: "Assignment" }],
    group: [[{ type: Object, ref: "User" }]],
  },
  { _id: false, timestamps: true }
);

//Add plugin

Slot.plugin(AutoIncrement, { id: "_slotId" });
Slot.plugin(mongooseDelete, {
  overrideMethods: "all",
  deletedAt: true,
});

module.exports = mongoose.model("Slot", Slot);
