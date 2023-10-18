const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Semester = require('./Semester');

const Class = new Schema(
  {
    _classId: { type: Number },
    name: { type: String, required: true },
    semesterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester' }
  },
  { _id: false, timestamps: true }
);

//Add plugin

Class.plugin(AutoIncrement, { id: '_classId' });
Class.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true
});

module.exports = mongoose.model('classes', Class);
