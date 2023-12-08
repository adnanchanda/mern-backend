const { Timestamp } = require("bson");
const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: "string",
      required: [true, "please add a text value"],
    },
  },
  {
    Timestamps: true,
  }
);

module.exports = mongoose.model('goal',goalSchema);