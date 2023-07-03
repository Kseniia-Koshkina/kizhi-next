import 'styles/App.css';


const Cart=()=>{
    
    let display="visible";
    return(
        
        <div className="container p-0 pb-4 pt-4 containerColor" >
            <div className="container mb-4">
                <div className="input-group flex-nowrap mb-4">                            
                    <input type="text" className="form-control"/>
                    <button type="button" className="button_serch"><img src="/images/icon-search.svg"></img></button>
                </div>   
                <div className="container p-0 pb-4" >
                    <h1 className="mb-4">Моя корзина</h1>
                </div>

                <div className='container' style={{display: display}}>
                    <img src="/images/empty_cart.svg"></img>
                    
                    <h1>Ваша корзина пуста</h1>
                </div>
            </div>
        </div>
    )
}

export default Cart;