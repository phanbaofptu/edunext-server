const classRouter = require("./class.routes");
const semesterRouter = require("./semester.routes");
const userRouter = require("./user.routes");

function route(app) {
  app.use("/semester", semesterRouter);
  app.use("/class", classRouter);
  app.use("/user", userRouter);
}
module.exports = route;
