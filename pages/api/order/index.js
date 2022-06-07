import Orders from '../../../models/orderModel';
import Products from '../../../models/Product';
import auth from '../../../middleware/auth';

const { default: connectDB } = require("../../../utils/connectDB");

connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await createOrder(req, res)
      break;
  }
}

const createOrder = async (req, res) => {
  try {
    const result = await auth(req, res)
    const { address, mobile, cart, total } = req.body

    const newOrder = new Orders({
      user: result.id, address, mobile, cart, total
    })
    res.json({newOrder})
  } catch (err) {
    return res.status(500).json({err: err.message})
  }
}