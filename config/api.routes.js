const classRouter = require("./class.routes");
const semesterRouter = require("./semester.routes");
const userRouter = require("./user.routes");
const courseRouter = require("./course.routes");
const slotRouter = require("./slot.routes");
const questionRouter = require("./question.routes");
const assignmentRouter = require("./assignment.routes");

function route(app) {
  app.use("/semester", semesterRouter);
  app.use("/class", classRouter);
  app.use("/user", userRouter);
  app.use("/course", courseRouter);
  app.use("/slot", slotRouter);
  app.use("/question", questionRouter);
  app.use("/assignment", assignmentRouter);
}
module.exports = route;
