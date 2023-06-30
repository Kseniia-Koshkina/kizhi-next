import { connectMongoDB } from "@/lib/connectMongo";
import Products from "@/models/productModel";


export default async function handler(req,res){
    if (req.method!=="GET"){
        res.status(405).send("Only GET requests are allowed");
        return
    }

    try{
        await connectMongoDB();
        const products = await Products.find();
        res.status(201).send(products);
    }
    catch{
        res.status(400).send({msg:"Error"})
    }
}