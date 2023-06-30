import {Schema,model,models} from "mongoose";


const productSchema = new Schema({
    id: String,
    name: String,
    price: Number,
    popular: Boolean,
    description: String,
    images: [String],
    rating: Number
});


const userSchema = new Schema({
    name: String,
    basket: [productSchema]
});

const Users = models.Users || model("Users", userSchema);

export default Users;