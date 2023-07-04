import 'styles/App.css';


const CartList=({item, changer})=>{
    const removeItem=async()=>{
       
        await fetch("http://localhost:3000/api/removeItem",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            
            body: JSON.stringify({
                "name":"Игорь",
                "item": {
                    "id": item.id,
                }
            })
            
        });

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
        changer(res));
    }



    return(
        <div className='row border rounded ' >
            <div className='col-2' ><img className="cart_image" src={"/images/"+item.name+"/1.jpg"}/></div>
            <div className='col-4'><p className='one_line_text pt-4'>{item.name}</p></div>
            <div className='col-6'style={{position:"relative"}}><img onClick={()=>removeItem()} className="cart_cross"src="/images/x.svg"/></div>
        </div>
    );
}

export default CartList;