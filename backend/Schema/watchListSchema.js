const mongoose = require("mongoose");
const schema = mongoose.Schema;

const watchSchma = new schema({
     name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
});

module.exports = watchSchma;

