import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    stock: { type: Number, required: true },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    returnPolicy: { type: String, required: true },

    images: {
      type: [String],
      default: [],
    },

    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);