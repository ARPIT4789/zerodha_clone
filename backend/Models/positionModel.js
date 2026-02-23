const mongoose = require("mongoose");
const positionSchema = require("../Schema/positionSchema");

const positionModel = mongoose.model("position",positionSchema);

module.exports = positionModel;