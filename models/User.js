const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const User = new Schema(
  {
    _userId: { type: Number },
    username: {
      type: String,
      required: [true, "Username không được bỏ trống"],
      unique: [true, "Username Exist"],
      maxlength: 210,
    },

    email: {
      type: String,
      required: [true, "Email không được bỏ trống"],
      unique: [true, "Email Exist"],
    },

    password: {
      type: String,
      required: [true, "Mật khẩu không được bỏ trống!"],
      unique: false,
    },
    name: {
      type: String,
      required: [true, "Tên không được bỏ trống"],
    },
    role: {
      type: String,
      required: [true, "Vai trò không được bỏ trống"],
      default: "user",
    },
  },
  { _id: false, timestamps: true }
);

//Add plugin
User.plugin(AutoIncrement, { id: "_userId" });
User.plugin(mongooseDelete, {
  overrideMethods: "all",
  deletedAt: true,
});

module.exports = mongoose.model.User || mongoose.model("User", User);
