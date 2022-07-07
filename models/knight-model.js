const mongoose = require("../connection");

const knightSchema = new mongoose.Schema({
  user: { type: String, required: true },
  name: { type: String, required: true},
  desc: { type: String},
  expPoints: { type: Number},
  
  completedToday: { type: Boolean},
});


const Knight = mongoose.model("Knight", knightSchema);

module.exports = Knight;