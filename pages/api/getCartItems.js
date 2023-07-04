import { connectMongoDB } from "@/lib/connectMongo";
import Users from "@/models/userModel"


export default async function handler(req,res){
    if (req.method!=="POST"){
        res.status(405).send("Only POST requests are allowed");
        return;
    }

    try{
        await connectMongoDB();
        const user = await Users.findOne({name:req.body.name});
        res.status(201).send(user);
    }
    catch{
        res.status(400).send({msg:"Error"});
    }
}