import express from "express";
import {getAllPharmacies} from "../controllers/pharmacies.js";

const router = express.Router();

// READ
router.get("/", getAllPharmacies);

export default router;