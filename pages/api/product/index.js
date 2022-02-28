import Product from "../../../models/Product";
import connectDB from "../../../utils/connectDB";

connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProducts(req, res);
      break;
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      status: "success",
      result: products.length,
      products,
    });
  } catch (error) {
    return res.status(500).json({
      err: error.message,
    });
  }
};
