import Product from "../../../models/Product";
import connectDB from "../../../utils/connectDB";

connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProduct(req, res);
      break;
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.query;

    const product = await Product.findById(id);
    if (!product)
      return res.status(400).json({ err: "This product does not exist." });

    res.json({
      product,
    });
  } catch (error) {
    return res.status(500).json({
      err: error.message,
    });
  }
};
