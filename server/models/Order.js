import mongoose from "mongoose";
import User from "./User.js";
import CartProduct from "./CartProduct.js";

const OrderSchema = new mongoose.Schema({
    ...User.schema.obj,
    cartItems: {
        type: [CartProduct.schema],
        required: true
    },
    totalQuantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
})

const Order = mongoose.model("Order", OrderSchema);

export default Order;