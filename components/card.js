import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';
import sentToBasket from '@/lib/sendToBasket';


const Card=(props)=>{
    const url = "/images/"+ props.item.name+"/";
    const nextPath = "/description/"+ props.item.id;
   
    return(     
            <div className="card">                   
                <Carousel>

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
                <div className="card-body" style={{textAlign: "center"}}>
                    <p className="card-title">{props.item.name}</p>
                    <p className="card-text">{props.item.price} руб.</p>
                    <a href="#" className="btn btn-primary" >В корзину</a>
                </div>
            </div>
    )
}

export default Card; 