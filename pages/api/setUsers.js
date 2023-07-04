import { connectMongoDB } from "@/lib/connectMongo";
import Users from "@/models/userModel";

export default async function handler(req, res) {
    if (req.method!=="POST"){
        res.status(405).send("Only POST requests are allowed");
        return
    }


    try{
        await connectMongoDB();
        const user = new Users({
            name: req.body.name,
            basket: []
        });
        
        user.save()
        .then(()=>console.log("saved"));
        res.status(200).send("saved");
    }
    catch{
        res.status(400).send({msg:"Error"});
    }

    
} 