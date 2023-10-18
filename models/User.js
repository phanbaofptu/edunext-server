const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const bcrypt = require('bcrypt');
const saltRounds = 10;

class User extends Model {
  static generatePasswordHash(query, cb) {
    let password = query.password.toString();
    return bcrypt.hash(password, saltRounds);
  }
}

const User = new Schema(
  {
    _id: { type: Number },
    email: {
      type: String,
      required: [true, 'Email không dượcf bỏ trống'],
      unique: [true, 'Email Exist']
    },

    password: {
      type: String,
      required: [true, 'Mật khẩu không được bỏ trống!'],
      unique: false
    }
  },
  { _id: false, timestamps: true }
);

//Add plugin
User.plugin(AutoIncrement);
User.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true
});

module.exports = mongoose.model.User || mongoose.model('User', User);
