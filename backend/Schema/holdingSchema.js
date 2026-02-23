const mongoose = require("mongoose");
const schema = mongoose.Schema;

const holdingSchma = new schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = holdingSchma;

