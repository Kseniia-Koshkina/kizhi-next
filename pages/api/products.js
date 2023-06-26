export default function handler(req, res) {

    const items=[
        {
            id:1,
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
            id:1,
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
            id:1,
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
            id:1,
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
            id:1,
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
    
    ]
    res.status(200).json(items);
}