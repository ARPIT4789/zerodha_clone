const {model} = require("mongoose");
const orderSchema = require("../Schema/orderSchema");

const orderModel = model("order",orderSchema);

module.exports = orderModel;