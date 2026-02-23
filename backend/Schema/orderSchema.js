const {Schema} = require("mongoose");

const orderSchema = new Schema(
  {
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = orderSchema;
