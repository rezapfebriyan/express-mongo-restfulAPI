import Product from "../Models/Product.js"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res
            .status(200)
            .json({
                "list Product": products
            })
    } catch (error) {
        res
            .status(500)
            .json({
            message: error.message
        })
    }
}

export const showProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res
            .status(200)
            .json({
                product
            })
    } catch (error) {
        res
            .status(404)
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
            .json({
                message: 'Data has been stored',
                data: save_product
            })
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
            .json({
                message: 'Data has been updated',
                data: update_product
            })
    } catch (error) {
        res
            .status(400)
            .json({
            message: error.message
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const delete_product = await Product.deleteOne(
            {_id: req.params.id}
            )
        res
            .status(200)
            .json({
                message: 'Data has been deleted'
            })
    } catch (error) {
        res
            .status(400)
            .json({
            message: error.message
        })
    }
}