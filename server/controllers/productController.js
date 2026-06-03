import Product from "../models/Product.js";


export const createProduct = async (req, res) => {
  try {
    const baseUrl = process.env.BASE_URL;

    const images = req.files
      ? req.files.map(
          (file) => `${baseUrl}/uploads/${file.filename}`
        )
      : [];

    const product = await Product.create({
      ...req.body,
      images,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateProduct = async (req, res) => {
  try {
  

    const baseUrl = process.env.BASE_URL;

    const files = req.files || [];

    let images = [];

    if (files.length > 0) {
      images = files.map(
        (file) => `${baseUrl}/uploads/${file.filename}`
      );
    }

    const updatedData = {
      ...req.body,
      stock: req.body.stock ? Number(req.body.stock) : 0,
      mrp: req.body.mrp ? Number(req.body.mrp) : 0,
      price: req.body.price ? Number(req.body.price) : 0,
    };

    if (images.length > 0) {
      updatedData.images = images;
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json(product);

  } catch (error) {
    console.log("UPDATE ERROR:", error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const togglePublishProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    product.isPublished = !product.isPublished;

    await product.save();

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};