import mongoose from "mongoose";
import Product from "./Product.js";

const PharmacySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        products: {
            type: [Product.schema],
            required: true
        }
    }
)

const Pharmacy = mongoose.model("Pharmacy", PharmacySchema);

export default Pharmacy;