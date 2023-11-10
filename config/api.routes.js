const {
  checkUser,
  checkTeacher,
  checkStudent,
  checkAdmin,
} = require("../middlewares/AuthMiddlewares");
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

  app.use("/check-user", checkUser);
  app.use("/check-teacher", checkTeacher);
  app.use("/check-student", checkStudent);
  app.use("/check-admin", checkAdmin);
}
module.exports = route;
