import { connectMongoDB } from "@/lib/connectMongo";
import Users from "@/models/userModel"


export default async function handler(req,res){
    if (req.method!=="GET"){
        res.status(405).send("Only GET requests are allowed");
        return;
    }

    try{
        await connectMongoDB();
        const products = await Users.find();
        res.status(201).send(products);
    }
    catch{
        res.statis(400).send({msg:"Error"});
    }
}