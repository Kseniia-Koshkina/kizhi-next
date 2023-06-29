import { connectMongoDB } from "@/lib/connectMongo";
import Products from "@/models/productModel";

export default async function handler(req, res) {
    if (req.method!=="POST"){
        res.status(405).send("Only POST requests are allowed");
        return
    }


    const productItem = new Products({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        popular: req.body.popular,
        description: req.body.description,
        images: req.body.images,
        rating: req.body.rating
    });
    productItem.save()
    .then(()=>console.log("saved"));
    res.status(200).send("saved");
}       