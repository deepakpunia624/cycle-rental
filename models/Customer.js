const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  contactNumber: String,
  address: String,
  sex: String,
  age: Number,
  proofOfIdentification: String,
  cycle: { type: mongoose.Schema.Types.ObjectId, ref: "Cycle" },
  code: String,
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  isActive: { type: String, default: true },
});
customerSchema.set("timestamps", true);
module.exports = mongoose.model("Customer", customerSchema);
