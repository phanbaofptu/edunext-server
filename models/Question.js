const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Course = require("./Course");

const Question = new Schema(
  {
    _questionId: { type: Number },
    title: { type: String, required: true },
    content: { type: String, required: true },
    name: { type: String, required: true },
    status: { type: String, required: true },
    starttime: { type: Date },
    endtime: { type: Date },
    slotId: { type: Number, ref: "Slot" },
  },
  { _id: false, timestamps: true }
);

//Add plugin

Question.plugin(AutoIncrement, { id: "_questionId" });
Question.plugin(mongooseDelete, {
  overrideMethods: "all",
  deletedAt: true,
});

module.exports = mongoose.model("Question", Question);
