import express from "express"
import { getProducts, storeProducts } from "../Controllers/ProductController.js"

const router = express.Router()

router.get('/', getProducts)
router.post('/', storeProducts)

export default router