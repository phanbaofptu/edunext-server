const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Course = require("./Course");

const Assignment = new Schema(
  {
    _assignmentId: { type: Number },
    title: { type: String, required: true },
    content: { type: String, required: true },
    status: { type: String, required: true },
    starttime: { type: Date },
    endtime: { type: Date },
    slotId: { type: Number, ref: "Slot" },
    additionalFile: { type: String },
    fileName: { type: String },
    submit: [
      {
        userId: { type: Number, ref: "User" },
        linkSubmit: { type: String },
        fileSubmit: { type: String },
        dateSubmit: { type: Date },
      },
    ],
  },
  { _id: false, timestamps: true }
);

//Add plugin

Assignment.plugin(AutoIncrement, { id: "_assignmentId" });
Assignment.plugin(mongooseDelete, {
  overrideMethods: "all",
  deletedAt: true,
});

module.exports = mongoose.model("Assignment", Assignment);
