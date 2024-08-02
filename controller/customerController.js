const Customer = require("../models/Customer");
const Cycle = require("../models/cycle");

function generateUniqueCode() {
  return Math.random().toString(36).substring(2, 15);
}

module.exports = {
  createCustomerRequest: async (req, res) => {
    try {
      const {
        name,
        email,
        contactNumber,
        address,
        sex,
        age,
        proofOfIdentification,
        type,
        period,
      } = req.body;

      const cycle = await Cycle.findOne({ type, period });
      if (!cycle) {
        return res.status(404).json({ message: "Cycle not found" });
      }

      const code = generateUniqueCode();

      const newCustomer = new Customer({
        name,
        email,
        contactNumber,
        address,
        sex,
        age,
        proofOfIdentification,
        cycle: cycle._id,
        code,
      });

      const savedCustomer = await newCustomer.save();
      res.status(201).json(savedCustomer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
