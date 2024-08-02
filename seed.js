const Cycle = require("./models/cycle");

const cycleData = [
  {
    type: "MTB",
    period: 7,
    price: 1000,
  },
  {
    type: "Hybrid",
    period: 7,
    price: 2000,
  },
  {
    type: "Road Bike",
    period: 7,
    price: 5000,
  },
];

const seedDatabase = async () => {
  try {
    const count = await Cycle.countDocuments();

    if (count === 0) {
      await Cycle.insertMany(cycleData);
      console.log("Data inserted successfully");
    } else {
      console.log("Data already exists. Skipping insertion.");
    }
  } catch (err) {
    console.error(err);
  }
};

seedDatabase();
