import Product from "../Models/Product.js"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res
            .status(200)
            .json(products)
    } catch (error) {
        res
            .status(500)
            .json({
            message: error.message
        })
    }
}

export const storeProduct = async (req, res) => {
    const product = new Product(req.body)
    try {
        const save_product = await product.save()
        res
            .status(201)
            .json(save_product)
    } catch (error) {
        res
            .status(400)
            .json({
            message: error.message
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const update_product = await Product.updateOne(
            {_id: req.params.id},
            {$set: req.body}
            )
        res
            .status(200)
            .json(update_product)
    } catch (error) {
        res
            .status(400)
            .json({
            message: error.message
        })
    }
}