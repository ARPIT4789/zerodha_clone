const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    authToken: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = userSchema;
