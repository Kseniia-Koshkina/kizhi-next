import Star from "./star.js"
import Carousel from 'react-bootstrap/Carousel';
import 'styles/App.css';

const Description=(props)=>{
    
    
    const url = "/images/"+props.item.name+"/";
    

    const  sentToCart= async ()=>{
        await fetch("http://localhost:3000/api/addItem",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            
            body: JSON.stringify({
                "name":"Игорь",
                "item": {
                    "id": props.item.id,
                    "name": props.item.name,
                    "price": props.item.price
                }
            })
            
        });
        
    }
    
    return(
        <>
        <div className="container pt-0 pt-md-3 containerColor" >
            <div className="container p-0 mb-4">
                <div className="input-group flex-nowrap mb-4">                            
                    <input type="text" className="form-control"/>
                    <button type="button" className="button_serch"><img src="/images/icon-search.svg"></img></button>
                </div>   
            </div>
            <div className="container p-0 pb-4" >
                <h1 className="mb-4">{props.item.name}</h1>
                {/* <!--Описание--> */}
                <div className="row">
                    {/* <!--Карусель цена описание--> */}
                    <div className="col-md-9 col-sm-8">
                        <div className="row">
                            {/* <!--Карусель--> */}
                            <div className="col-md">
                                <Carousel >
                                    {props.item.images.map((image,index)=>{
                                        
                                        return (
                                            <Carousel.Item key={index}>

                                                <img style={{borderRadius:"10px"}}
                                                className="d-block w-100"
                                                src={url+image}
                                                alt="slide"
                                                
                                                />    
                                                
                                            </Carousel.Item>
                                        )
                                    })} 
                                    
                               
                                </Carousel>
                            </div>
                            {/* <!--Цена--> */}
                            <div className="col-md-4">
                                <div className="card">
                                    {/* <!--Цена--> */}
                                    <div className="card-body" style={{textAlign: "center"}}>
                                        <p className='star'><Star num={props.item.rating}></Star></p>
                                        <p className="card-text" style={{fontSize: "28px"}}>{props.item.price} руб.</p>


                                        <div className="input-group flex-nowrap mb-4 describtion_card" >   
                                            <button type="button" id="minus" style={{borderRadius: "0px"}}>-</button>                         
                                            <input type="number" id="amount" className="form-control" />
                                            <button type="button" id="plus" style={{borderRadius: "0px"}}>+</button>
                                        </div> 
                                        <p id="total">шт</p>
                                        
                                        <button className="button_visible btn btn-primary" onClick={()=>sentToCart()}>КУПИТЬ</button>
                                    </div>
                                </div>
                            </div>  
                        </div>
                                          
                        {/* <!--Текст описания--> */}
                        <div className="row mb-4">
                            <div className="col-8">
                                <h5 className="mt-4 mb-4">Описание</h5>
                                <p>
                                    {props.item.description}
                                </p>
                            </div>                            
                        </div>
                    </div>
                    {/* <!-- Соц.сети --> */}
                    <div className="col-md-3 col-sm-4">
                        <h5>МЫ В СОЦСЕТЯХ</h5>
                        <ul className='socnetlistUL'>
                            <li className={"socnetlistLI"}><a href="https://vk.com/kizhi_museum" key ={11}><img src="/images/yt.png" /></a></li>
                            <li className={"socnetlistLI"}><a href="https://www.youtube.com/user/kizhimuseum" key={12}><img src="/images/vk.png" /></a></li>
                        </ul>
                    </div>
                                                           
                </div>
            </div>
        </div>
        </>
    )
}

export default Description;