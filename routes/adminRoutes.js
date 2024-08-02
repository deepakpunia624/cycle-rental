const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controller/adminController");

adminRouter.get("/request/list", adminController.requestList);

adminRouter.patch(
  "/request/:uniqueCode",
  adminController.rejectAcceptCustomerRequest
);

module.exports = adminRouter;
