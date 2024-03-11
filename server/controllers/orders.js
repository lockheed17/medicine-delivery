import Order from "../models/Order.js";

// CREATE
export const createOrder = async (req, res) => {
    const { name, email, phone, address, cartItems, totalQuantity, totalPrice } = req.body;

    try {
        const newOrder = new Order({
            name,
            email,
            phone,
            address,
            cartItems,
            totalQuantity,
            totalPrice,
        });

        const savedOrder = await newOrder.save();

        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

