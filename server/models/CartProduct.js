import mongoose from "mongoose";
import Product from "./Product.js";

const CartProductSchema = new mongoose.Schema({
    ...Product.schema.obj,
    quantity: {
        type: Number,
        required: true
    }
});

const CartProduct = mongoose.model("CartProduct", CartProductSchema);

export default CartProduct;