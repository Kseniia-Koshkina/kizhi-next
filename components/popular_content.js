import 'styles/App.css';
import Card from "./card.js";


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


const Popular=()=>{
    //let listRowsOut = divide(items);
    return(
        <div className="container p-0 pb-4 pt-4 containerColor" >
            <div className='container p-0'>
                <div className="row">
                    {/* <!--Каталог--> */}
                    <div className="col-md-9 col-sm-8">
                        <h2 className="mb-4" >Популярные товары</h2>
                        {/* <!-- Каталог --> */}
                        <div className="row">
                        {items.map((item, index)=>{ 
                            return(
                                <div key={index} className="col-md-4 col-sm-6 pb-3">
                                    <Card item={item}></Card> 
                                </div>
                            )
                        })} 
                        </div>           
                    </div>
                    {/* <!--Боковая панель--> */}
                    <div className="col">                    
                        <div className="input-group flex-nowrap mb-4">                            
                            <input type="text" className="form-control"/>
                            <button type="button"><img src="/images/icon-search.svg"></img></button>
                        </div>   
                        
                        
                        <h5>МЫ В СОЦСЕТЯХ</h5>
                        <ul className='socnetlistUL'>
                            <li className={"socnetlistLI"}><a href="https://vk.com/kizhi_museum"><img src="/images/yt.png" /></a></li>
                            <li className={"socnetlistLI"}><a href="https://www.youtube.com/user/kizhimuseum"><img src="/images/vk.png" /></a></li>
                        </ul>  
                        <h5>Полезная информация</h5> 
                        <a href="#" style={{color:"#77B2C9"}}>
                            Как купить ваш первый заказ в интернет-магазине? <br/>
                            Мы с радостью подскажем как сделать покупки в интернете простыми и удобными.
                        </a>   
                        <div className="row">
                            <div className="col">
                                <img  className={"smalllogo"} src="/images/pay_mir_ru_logo.png" />
                            </div>
                            <div className="col">
                                <img  className={"smalllogo"} src="/images/pay_visa_logo.png" />
                            </div>
                            <div className="col">
                                <img  className={"smalllogo"} src="/images/pay_mastercard_logo.png" />
                            </div>                            
                        </div>                          
                            
                    </div>
                </div>   
            </div>
        </div>
        
    )
}

export default Popular;