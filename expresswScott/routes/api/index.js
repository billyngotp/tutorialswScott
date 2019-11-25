const apiRouter = require('express').Router();
const businessRouter = require('./business.route');
const userRouter = require('./User.route');

apiRouter.use("/business", businessRouter)
apiRouter.use("/user", userRouter);

module.exports = apiRouter;