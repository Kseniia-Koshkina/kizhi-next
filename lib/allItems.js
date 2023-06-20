
export function getAllPostIds() {
    const items=[
        {
            id:'1',
            name:"Книга Остров Преображения",
            price:1540,
            images:[
                "/images/Книга Остров Преображения/1_image.jpg",
                "/images/Книга Остров Преображения/2_image.jpg",
                "/images/Книга Остров Преображения/3_image.jpg",
                "/images/Книга Остров Преображения/4_image.jpg",
                "/images/Книга Остров Преображения/5_image.jpg"
            ],
            describtion:"some describtion",
            rating:3
        },
        
        
    
    ];


    return items.map((item) => {
      return {
        params: {
          id: item.id,
        },
      };
    });
}


export function getPostData(id) {
    const items=[
        {
            id:'1',
            name:"Книга Остров Преображения",
            price:1540,
            images:[
                "/images/Книга Остров Преображения/1_image.jpg",
                "/images/Книга Остров Преображения/2_image.jpg",
                "/images/Книга Остров Преображения/3_image.jpg",
                "/images/Книга Остров Преображения/4_image.jpg",
                "/images/Книга Остров Преображения/5_image.jpg"
            ],
            describtion:"some describtion",
            rating:3
        },
        
        
    
    ];



    for(let i = 0; i< items.length;i++){
        if (items[i].id==id){
            return items[i];
            
        }
    }
     
      
}

export function getDAta(){
    return [
        {
            id:'1',
            name:"Книга Остров Преображения",
            price:1540,
            images:[
                "/images/Книга Остров Преображения/1_image.jpg",
                "/images/Книга Остров Преображения/2_image.jpg",
                "/images/Книга Остров Преображения/3_image.jpg",
                "/images/Книга Остров Преображения/4_image.jpg",
                "/images/Книга Остров Преображения/5_image.jpg"
            ],
        },
        {
            id:'2',
            name:"Книга Остров Преображения",
            price:1540,
            images:[
                "/images/Книга Остров Преображения/1_image.jpg",
                "/images/Книга Остров Преображения/2_image.jpg",
                "/images/Книга Остров Преображения/3_image.jpg",
                "/images/Книга Остров Преображения/4_image.jpg",
                "/images/Книга Остров Преображения/5_image.jpg"
            ]
        },
        {
            id:'3',
            name:"Книга Остров Преображения",
            price:1540,
            images:[
                "/images/Книга Остров Преображения/1_image.jpg",
                "/images/Книга Остров Преображения/2_image.jpg",
                "/images/Книга Остров Преображения/3_image.jpg",
                "/images/Книга Остров Преображения/4_image.jpg",
                "/images/Книга Остров Преображения/5_image.jpg"
            ]
        },
        {
            id:'4',
            name:"Книга Остров Преображения",
            price:1540,
            images:[
                "/images/Книга Остров Преображения/1_image.jpg",
                "/images/Книга Остров Преображения/2_image.jpg",
                "/images/Книга Остров Преображения/3_image.jpg",
                "/images/Книга Остров Преображения/4_image.jpg",
                "/images/Книга Остров Преображения/5_image.jpg"
            ]
        },
        
    
    ];

}