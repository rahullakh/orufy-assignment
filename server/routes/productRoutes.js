import express from "express";
import multer from "multer";

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  togglePublishProduct,
} from "../controllers/productController.js";

const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });


router.post("/", upload.array("images", 5), createProduct);

router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id/publish", togglePublishProduct);

export default router;