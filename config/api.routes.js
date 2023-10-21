const classRouter = require("./class.routes");
const semesterRouter = require("./semester.routes");

function route(app) {
  app.use("/semester", semesterRouter);
  app.use("/class", classRouter);
}
module.exports = route;
