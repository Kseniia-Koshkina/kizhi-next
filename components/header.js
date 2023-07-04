

import 'styles/App.css';



const Header=()=>{
    return(
        
        <div className="container pt-0 pt-md-3 containerColor" >
            {/* <!-- Шапка --> */}
            <div className="container p-0 " >
                {/* <!-- Логотип, Телефон, Время работы, Корзина --> */}
                <div className="row pb-3">
                    {/* <!-- Логотип --> */}
                    <div className=" col-12 col-md-3 pl-0 pr-0 pl-md-3 pr-md-3 ">
                        {/* <!--Навигация на телефонах--> */}
                        <nav className="d-md-none navbar navbar-expand-lg navbar-dark navigation">
                            <div className="container-fluid">
                                <img className={"logo"} src="/images/logo_mobile.png" alt=""/>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarContent">
                                <ul className="navbar-nav me-auto ">
                                    <li className="nav-item">
                                    <a className="nav-link "  href="/">ГЛАВНАЯ</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link "  href="#">ИКОНЫ</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/books">КНИГИ</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link "  href="#">СУВЕНИРЫ</a>
                                    </li>   
                                    <li className="nav-item">
                                    <a className="nav-link "  href="/cart">КОРЗИНА  <img style={{height:"30px", fill:"#FFFFFF"}}src="/images/empty_cart_mobile.svg"/></a>
                                    </li>                                
                                </ul>
                                </div>
                            </div>
                        </nav>
                        


                        {/* <!--Лого--> */}
                        <a href="https://shop.kizhi.karelia.ru/" className="d-none d-md-flex p-0 ">
                            <img className="logo" src="/images/logo.jpg"/>
                        </a>
                    </div>

                    {/* <!-- Телефон и время работы --> */}
                    <div className="col-12 col-md-6 pt-2" style={{textAlign:"center"}}>
                        <div className="row">
                            <div className="col ">
                                <p >
                                    8 (8142) 79-98-70<br />
                                    8 (8142) 79-98-54<br />
                                </p>
                            </div>
                            <div className="col ">
                                
                                Время работы:<br />
                                Пн-Пт 09:00 - 17:00  <br />   
                                
                            </div>
                        </div>
                    </div>  

                    {/* <!-- Корзина --> */}
                    <div className="col-3 d-none d-md-flex "> 
                        <a href="/cart" style={{paddingLeft:"25%"}}><img src="/images/empty_cart.svg"  style={{height:"60px", width:"auto",paddingLeft:"25%"}}></img></a>
                        
                    </div>

                </div>

                {/* <!--Навигация--> */}
                <nav className="d-none navbar navbar-expand-md navbar-dark d-md-flex rounded navigation">                       
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="/">ГЛАВНАЯ</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">ИКОНЫ</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/books">КНИГИ</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">СУВЕНИРЫ</a>
                        </li>
                    </ul>  
                </nav>   
            </div>
        </div>

    )        
}

export default Header;