import {Schema,model,models} from "mongoose";


const productSchema = new Schema({
    id: String,
    name: String,
    price: Number,
    popular: Boolean,
    description: String,
    images: [String],
    rating: Number
})
const Products = models.Products || model("Products", productSchema);

export default Products; 