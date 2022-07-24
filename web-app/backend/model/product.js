const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    coverImage: String,
    name: {type: String, required: true, max:[60, '最大60文字までです']},
    price: Number,
    description: String,
    heding1: String,
    heding2: String,
    heding3: String,
    hedingtext1: String,
    hedingtext2: String,
    hedingtext3: String,
}, { collection: 'products' })

module.exports = mongoose.model('Product', ProductSchema)