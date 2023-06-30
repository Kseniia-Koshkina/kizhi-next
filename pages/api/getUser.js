import { connectMongoDB } from "@/lib/connectMongo";
import Users from "@/models/userModel"


export default async function handler(req,res){
    if (req.method!=="GET"){
        res.status(405).send("Only GET requests are allowed");
        return;
    }

    try{
        await connectMongoDB();
        const users = await Users.find({ });
        res.status(201).send(users);
    }
    catch{
        res.statis(400).send({msg:"Error"});
    }
}