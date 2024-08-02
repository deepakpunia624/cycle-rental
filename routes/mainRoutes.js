let express = require("express");

const adminRouter = require("./adminRoutes");
const customerRouter = require("./customerRoutes");
let commonRouter = express.Router();

commonRouter.use("/admin", adminRouter);

commonRouter.use("/customer", customerRouter);

module.exports = commonRouter;
