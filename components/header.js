

import 'styles/App.css';




const Header=()=>{
    return(
        
        <div className="container pt-0 pt-md-3 containerColor" >
            {/* <!-- Шапка --> */}
            <div className="container p-0 mb-4" >
                {/* <!-- Логотип, Телефон, Время работы, Корзина --> */}
                <div className="row mb-3">
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
                                    <a className="nav-link "  href="#">ИКОНЫ</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">КНИГИ</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link "  href="#">СУВЕНИРЫ</a>
                                    </li>                                   
                                </ul>
                                </div>
                            </div>
                        </nav>
                        


                        {/* <!--Лого--> */}
                        <a href="https://shop.kizhi.karelia.ru/" className="d-none d-md-flex p-0 ">
                            <img className="logo" src="images/logo.jpg"/>
                        </a>
                    </div>

                    {/* <!-- Телефон и время работы --> */}
                    <div className="col-12 col-md-6 ">
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
                    <div className="col-3 d-none d-md-flex"> 
                        <p>Basket</p>
                    </div>

                </div>

                {/* <!--Навигация--> */}
                <nav className="d-none navbar navbar-expand-md navbar-dark d-md-flex navigation">                       
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="#">ИКОНЫ</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">КНИГИ</a>
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