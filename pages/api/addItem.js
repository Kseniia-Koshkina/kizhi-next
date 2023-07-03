import { connectMongoDB } from "@/lib/connectMongo";
import Users from "@/models/userModel";

export default async function handler(req, res) {
    if (req.method!=="POST"){
        res.status(405).send("Only POST requests are allowed");
        return
    }


    try{
        await connectMongoDB();
        const user = await Users.findOne({ name:req.body.name });
        
        user.basket.push(req.body.item);


        user.save()
        .then(()=>console.log("saved"));
        res.status(200).send("saved");
        
    }
    catch{
        res.statis(400).send({msg:"Error"});
    }
} 