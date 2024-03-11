import express from "express";
import {createOrder} from "../controllers/orders.js";

const router = express.Router();

// READ
router.post("/", createOrder);

export default router;