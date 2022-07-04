const mongoose = require("../connection");

const knightSchema = new mongoose.Schema({
  user: { type: String },
  name: { type: String},
  description: { type: String},
  expPoints: { type: String},
  completedToday: { type: Boolean},
});


const Knight = mongoose.model("Knight", knightSchema);

module.exports = Knight;