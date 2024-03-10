import Pharmacy from "../models/Pharmacy.js";
import Product from "../models/Product.js";

// READ
export const getAllPharmacies = async (req, res) => {
    try {
        const pharmacies = await Pharmacy.find();
        res.status(200).json(pharmacies);
    } catch (error) {
        console.error("Error fetching pharmacies:", error);
        res.status(500).json({ message: error.message });
    }
}

// export const getAllProductsInPharmacy = async (req, res) => {
//     try {
//         const pharmacyId = req.params._id;
//         const pharmacy = await Pharmacy.findById(pharmacyId);
//         if (!pharmacy) {
//             return res.status(404).json({ error: "Pharmacy not found" });
//         }
//         // Получаем все продукты внутри аптеки
//         const products = await Product.find({ _id: { $in: pharmacy.products } });
//         res.status(200).json(products);
//     } catch (error) {
//         console.error("Error fetching products in pharmacy:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };
