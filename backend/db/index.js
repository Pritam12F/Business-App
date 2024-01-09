const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://pritam12f:IotzqDm6nf6V4wyb@cluster0.w5m2bxm.mongodb.net/BusinessApp"
);

const cardSchema = new mongoose.Schema({
  name: String,
  description: String,
  interests: Array,
  linkedin: String,
  twitter: String,
});

const Card = mongoose.model("Card", cardSchema);

module.exports = {
  Card,
};
