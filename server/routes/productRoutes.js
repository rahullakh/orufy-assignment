import express from "express";
import { upload } from "../middleware/multer.js";

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  togglePublishProduct,
} from "../controllers/productController.js";

const router = express.Router();


router.post("/", upload.array("images", 5), createProduct);


router.get("/", getProducts);


router.get("/:id", getProductById);


router.put("/:id", upload.array("images", 5), updateProduct);


router.delete("/:id", deleteProduct);


router.patch("/:id/publish", togglePublishProduct);

export default router;