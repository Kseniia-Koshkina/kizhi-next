
export async function getAllPostIds() {
    let items=[
        {
            id:'1',
            name:"",
            price:1540,
            images:[
                "",
                
            ],
            describtion:"",
            rating:0
        },
        
        
    
    ];
    fetch("http://localhost:3000/api/products")
    .then((resp)=>resp.json())
    .then((res)=>items=res)
    return items.map((item) => {
      return {
        params: {
          id: item.id,
        },
      };
    });
}


export async function getPostData(id) {
    let items=[
        {
            id:'1',
            name:"",
            price:1540,
            images:[
                "",
                
            ],
            describtion:"",
            rating:0
        },
        
        
    
    ];
    fetch("http://localhost:3000/api/products")
    .then((resp)=>resp.json())
    .then((res)=>items=res)

    for(let i = 0; i< items.length;i++){
        if (items[i].id==id){
            return items[i];
            
        }
    }
}

