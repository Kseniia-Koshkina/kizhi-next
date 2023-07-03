import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';



const Card=(props)=>{
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

    const url = "/images/"+ props.item.name+"/";
    const nextPath = "/description/"+ props.item.id;
   
    return(     
            <div className="card">                   
                <Carousel touch={true} interval={null}>

                {props.item.images.map((image, index)=>{
                    return(
                        <Carousel.Item key={index}>
                            <Link  href={nextPath} >
                                <img 
                                className="d-block w-100"
                                src={url+image}
                                alt="slide"
                                 
                                />    
                            </Link>
                        </Carousel.Item>
                    )
                })}
                </Carousel>
                <div className="card-body itemCards" style={{textAlign: "center"}}>
                    <p className="card-title one_line_text one_line_text" >{props.item.name}</p>
                    <p className="card-text">{props.item.price} руб.</p>
                    <button onClick={()=>sentToCart()} className="btn btn-primary" >В корзину</button>
                </div>
            </div>
    )
}

export default Card; 