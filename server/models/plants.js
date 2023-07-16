var mongoose = require("mongoose");

const plantSchema = mongoose.Schema({
  name: { type: String, required: true },
  scientificName: { type: String, required: true },
  family: { type: String, required: true },
  kingdom: { type: String, required: true },
  imgUrl: { type: String, required: false },
  id: { type: String, required: false },
});

module.exports = mongoose.model("Plant", plantSchema);
