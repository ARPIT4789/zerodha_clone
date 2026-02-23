const mongoose = require("mongoose");
const holdingSchma = require("../Schema/holdingSchema");

const holdingModel =  mongoose.model("holding",holdingSchma);
module.exports = holdingModel;