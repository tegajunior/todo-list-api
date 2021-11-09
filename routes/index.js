// const homeRouter = require("./home.routes");
const authRouter = require("./auth/auth.routes");
const userRouter = require("./user/user.routes");
const todoRouter = require("./todo/todo.routes");

const routers = (app) => {
  // app.use("/api/v1/", homeRouter);
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/todo", todoRouter);
};

module.exports = routers;
