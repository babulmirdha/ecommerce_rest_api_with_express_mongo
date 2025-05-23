const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
  price: { type: mongoose.Schema.Types.Decimal128, required: true }
});

module.exports = mongoose.model("OrderItem", orderItemSchema);
