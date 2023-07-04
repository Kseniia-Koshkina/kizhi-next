import 'styles/App.css';
import React, { useState, useEffect } from 'react';
import CartList from './cartList';


const Cart=()=>{



    



    
    const [cartItem, setCartItem] = useState({name:"",basket:[]});

    useEffect( ()=>{
        fetch("http://localhost:3000/api/getCartItems",{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                "name":"Игорь"
                
            })
        })
        .then((resp)=>resp.json())
        .then((res)=>
        setCartItem(res));
    },[]);   
    return(
        
        <div className="container p-0 pb-4 pt-4 containerColor" >
            <div className="container mb-4">
                <div className="input-group flex-nowrap mb-4">                            
                    <input type="text" className="form-control"/>
                    <button type="button" className="button_serch"><img src="/images/icon-search.svg"></img></button>
                </div>   
                <div className="container p-0 ">
                    <h1 className="mb-4">Моя корзина</h1>
                </div>

                {cartItem.basket.length==0 && <div className='container pb-5 pt-5' style={{textAlign:"center"}}>
                   
                    <img src="/images/empty_cart.svg"></img>
                    
                    <h1 className='empty_cart_text'>Ваша корзина пуста</h1>
                    
                </div>}
                
                {cartItem.basket.length!==0 && <div className='container pb-5 pt-5'>
                
                    {cartItem.basket.map((item,index)=>{
                        return(
                            <CartList key ={index} item={item} changer={setCartItem}></CartList>
                        )
                    })}
                </div>}
            </div>
        </div>
    )
}

export default Cart;