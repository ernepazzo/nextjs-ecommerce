import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  address: String,
  mobile: String,
  cart: Array,
  total: Number,
  delivered: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

// let Dataset = mongoose.models.order || mongoose.model('order', orderSchema)
// export default Dataset;

export default mongoose.models.Order || mongoose.model("Order", orderSchema);;