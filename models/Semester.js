const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Semester = new Schema(
  {
    _id: { type: Number },
    name: { type: String, required: true, uppercase: true },
    year: { type: String },
    isNow: { type: Boolean },
  },
  { _id: false, timestamps: true }
);

//Add plugin
Semester.plugin(AutoIncrement);
Semester.plugin(mongooseDelete, {
  overrideMethods: "all",
  deletedAt: true,
});

module.exports = mongoose.model("Semester", Semester);
