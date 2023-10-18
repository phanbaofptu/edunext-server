// config/database.js
var mongoose = require('mongoose');
var dbURL = require('./properties').DB;

module.exports = async function () {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'edunext'
    });

    console.log('Connect thành công');
  } catch (error) {
    console.log('Connect lỗi');
  }
};
