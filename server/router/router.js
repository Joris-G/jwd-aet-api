const express = require("express");

const processesRouter = require("./routes/processes.router");
const userRouter = require("./routes/user.router");
// const processRouter = require("./src/_routes/processRouter");
// const tasksRouter = require("./src/_routes/tasksRouter");
// const projectRouter = require("./src/_routes/projectRouter");
// const serviceRouter = require("./src/_routes/services.route");
// const authMiddleware = require("./src/_middlewares/authMiddleware");
// const isManagerMiddleware = require("./src/_middlewares/isManagerMiddlware");

const router = express.Router();

router.use("/process", processesRouter);
router.use("/", (req, res) => {
  console.log(`Bienvenu dans l'api`);
  return res.status(201).json("action");
});
// router.use("/auth", authRouter);
// router.use("/users", userRouter);
// router.use("/process", processRouter);
// router.use("/tasks", tasksRouter);
// router.use("/services", serviceRouter);
// router.use("/project", authMiddleware, isManagerMiddleware, projectRouter);

module.exports = router;
