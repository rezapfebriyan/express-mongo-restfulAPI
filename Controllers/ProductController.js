import Product from "../Models/Product.js"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}
