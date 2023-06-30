import Star from "./star.js"
import Carousel from 'react-bootstrap/Carousel';
import 'styles/App.css';

const Description=({item})=>{
    
    
    const url = "/images/"+item.name+"/";

    
    return(
        <>
        <div className="container pt-0 pt-md-3 containerColor" >
            <div className="container p-0 mb-4">
                <div className="input-group flex-nowrap mb-4">                            
                    <input type="text" className="form-control"/>
                    <button type="button"><img src="/images/icon-search.svg"></img></button>
                </div>   
            </div>
            <div className="container p-0 pb-4" >
                <h1 className="mb-4">{item.name}</h1>
                {/* <!--Описание--> */}
                <div className="row">
                    {/* <!--Карусель цена описание--> */}
                    <div className="col-md-9 col-sm-8">
                        <div className="row">
                            {/* <!--Карусель--> */}
                            <div className="col-md">
                            <Carousel>
                                    {item.images.map((image,index)=>{
                                        
                                        return (
                                            <Carousel.Item key={index}>

                                                <img 
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
                                        <p className='star'><Star num={item.rating}></Star></p>
                                        <p className="card-text" style={{fontSize: "28px"}}>{item.price} руб.</p>


                                        <div className="input-group flex-nowrap mb-4 describtion_card" >   
                                            <button type="button" id="minus" style={{borderRadius: "0px"}}>-</button>                         
                                            <input type="number" id="amount" className="form-control" />
                                            <button type="button" id="plus" style={{borderRadius: "0px"}}>+</button>
                                        </div> 
                                        <p id="total">шт</p>
                                        
                                        <a href="#" className="btn btn-primary describtion_card_button" >КУПИТЬ</a>
                                    </div>
                                </div>
                            </div>  
                        </div>
                                          
                        {/* <!--Текст описания--> */}
                        <div className="row mb-4">
                            <div className="col-8">
                                <h5 className="mt-4 mb-4">Описание</h5>
                                <p>
                                    {item.description}
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