const mongoose = require("mongoose");
const watchSchma = require("../Schema/watchListSchema");

const watchModel =  mongoose.model("watchList",watchSchma);

module.exports = watchModel;