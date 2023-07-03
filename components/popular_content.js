import 'styles/App.css';
import Card from "./card.js";
import React, { useState, useEffect } from 'react'





const Popular=()=>{
    // const [items,setItems]= useState([{id:1,name:"default",price:0,images:["default.jpg"]},]);
    const [items,setItems]= useState([]);

    useEffect( ()=>{
        fetch("http://localhost:3000/api/getProducts")
        .then((resp)=>resp.json())
        .then((res)=>
        setItems(res));
    },[])
    
    let index=100;
    return(
        
        <div className="container p-0 pb-4 pt-4 containerColor" >
            <div className='container '>
                <div className="row">
                    {/* <!--Каталог--> */}
                    <div className="col-md-9 col-sm-8">
                        <h2 className="mb-4" >Популярные товары</h2>
                        {/* <!-- Каталог --> */}
                        <div className="row">
                        {items.map((item)=>{
                            index+=1;
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
                            <input type="text" className="form-control "/>
                            <button type="button" className='button_serch'><img src="/images/icon-search.svg"></img></button>
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