const Customer = require("../models/Customer");

module.exports = {
  requestList: async (req, res) => {
    try {
      const requestList = await Customer.find().populate("cycle");
      const totalRequest = await Customer.countDocuments();
      res.status(200).json({
        success: true,
        message: "All requests found successfully",
        count: totalRequest,
        companies: requestList,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  },

  rejectAcceptCustomerRequest: async (req, res) => {
    try {
      const { uniqueCode } = req.params;
      const { status } = req.body;

      const existingRequest = await Customer.findOne({ code: uniqueCode });
      if (!existingRequest) {
        return res.status(404).json({ message: "Request not found" });
      }

      const request = await Customer.updateOne(
        { code: uniqueCode },
        { $set: { status } }
      );
      res.status(200).json({ message: "Request updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating request" });
    }
  },
};
