import express from "express"
import { getProducts } from "../Controllers/ProductController.js"

const router = express.Router()

router.get('/', getProducts)

router.get('/', (req, res) => {
    res.send('Hello')
})

export default router