const mongoose = require("mongoose");

const cycleSchema = new mongoose.Schema({
  type: String,
  period: Number,
  price: Number,
  isActive: { type: String, default: true },
});
cycleSchema.set("timestamps", true);
module.exports = mongoose.model("Cycle", cycleSchema);
