export default function handler(req,res){
    const items = [
        {
            id:"001",
            name: "Some name",
            description: "some description",
            price: 0,

        },
        {
            id:"002",
            name: "Some name",
            description: "some description",
            price: 0,

        }
    ];
    res.status(200).send(items);
    
}