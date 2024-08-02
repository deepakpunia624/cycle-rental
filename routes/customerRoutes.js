const express = require("express");
const customerRouter = express.Router();
const customerController = require("../controller/customerController");

customerRouter.post("/", customerController.createCustomerRequest);

module.exports = customerRouter;
