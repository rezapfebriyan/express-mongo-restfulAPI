import mongoose from "mongoose"

const Product = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})

//*  EXPORT model (nama_model, nama_variabel)
export default mongoose.model('Products', Product)