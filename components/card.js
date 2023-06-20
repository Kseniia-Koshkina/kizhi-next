import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';

const Card=({item})=>{
    return(     
            <div className="card">                   
                <Carousel>
                {item.images.map((image,index)=>{
                    return(
                        <Carousel.Item key={index}>
                            <Link  href="/describtion/1">
                                <img 
                                className="d-block w-100"
                                src={image}
                                alt="slide"
                                 
                                />    
                            </Link>
                        </Carousel.Item>
                    )
                })}
                </Carousel>
                <div className="card-body" style={{textAlign: "center"}}>
                    <p className="card-title">{item.name}</p>
                    <p className="card-text">{item.price} руб.</p>
                    <a href="#" className="btn btn-primary">В корзину</a>
                </div>
            </div>
        
    )
}

export default Card; 