const { Router } = require("express");
const Products = require("..//DAOs/mongo/models/products.models");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const products = await Products.find();
    res.json({ mesagge: products });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const { title, price, stock, description,category, thumbnail, code} = req.body;
    const newProduct = {
      title,
      description,
      code,
      price,
      category,
      stock,
      thumbnail,
    };

    const products = await Products.create(newProduct);
    res.json({ message: products });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    res.json({ message: "hi" });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const {} = req.body;

    res.json({ message: "hi" });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {} = req.body;

    res.json({ message: "hi" });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json({ message: "hi" });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});

module.exports = router;
