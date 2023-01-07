import express from "express"
import { 
    getProducts,
    storeProduct,
    updateProduct
 } from "../Controllers/ProductController.js"

const router = express.Router()

//! === L I S T ===
router.get('/', getProducts)

//! === S T O R E ===
router.post('/', storeProduct)

//! === U P D A T E ===
router.patch('/:id', updateProduct)

export default router