const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/cycle-rental', {
    useNewUrlParser: "true",
});
mongoose.connection.on("error", (err) => {
    console.log("mongoose Connection Error", err);
});
mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected");
});