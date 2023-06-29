
export function getAllPostIds() {
    let items=[
        {
            id:'1',
            name:"No name",
            price:1540,
            images:[
                "",
                
            ],
            describtion:"no description",
            rating:0
        },
        
        
    
    ];
    fetch("http://localhost:3000/api/products")
    .then((resp)=>resp.json())
    .then((res)=>items=res);

    return items.map((item) => {
      return {
        params: {
          id: item.id,
        },
      };
    });
}


export function getPostData(id) {
    let items=[
        {
            id:'1',
            name:"No name",
            price:1540,
            images:[
                "",
                
            ],
            description:"no description",
            rating:0
        },
        
        
    
    ];
    fetch("http://localhost:3000/api/products")
    .then((resp)=>resp.json())
    .then((res)=>items=res);

    for(let i = 0; i< items.length;i++){
        if (items[i].id==id){
            return items[i];
        }
    }
}

