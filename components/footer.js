import 'styles/App.css';

const Footer=()=>{
    return(
        // <!-- Кнопки ютуб и вк -->
    <>
    <div className="container-fluid p-0" style={{backgroundColor: "#1F496A"}}>
        <div className="container">
            <div className="row m-0 lineYouTubeVk" >
                {/* <!-- YouTube --> */}
                <div className="col youTube">                    
                    <a href="https://www.youtube.com/user/kizhimuseum">
                        <img className='socnetlogo' src="/images/youtube.svg" alt="YouTube logo" /> 
                    </a>                    
                </div>
                {/* <!-- VK --> */}
                <div className="col VK">
                    <a href="https://vk.com/kizhi_museum">                 
                        <img className='socnetlogo' src="/images/vk.svg" alt="VK logo" />
                    </a>
                    
                </div>
            </div>
        </div> 
    </div>

    {/* <!-- Контактная информация --> */}
    <div className="container-fluid " style={{backgroundColor:  "#343A40"}}>
        <div className="container py-5">
            <div className="row text-white">
                {/* <!-- Лого, тел и время работы --> */}
                <div className="col ">
                    <div className="mb-3">
                        <img className="logo" src="/images/logo_mobile.png" alt="logo"/>
                    </div>
                    <div className="mb-3">
                        <span>
                            8 (8142) 79-98-70<br />
                            8 (8142) 79-98-54<br />
                        </span>
                    </div>
                    <div className="mb-3">
                        Пн-Пт 09:00 - 17:00
                    </div>
                    <div className="mb-3">
                        <a href="#">Персональный раздел</a>
                    </div>
                </div>
                <div className="col ">
                    <h4>О магазине</h4>                    
                    <ul>
                        <li><a href="#">Как купить</a></li>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Правила, политика конфиденциальности</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </div>
                {/* <!-- О магазине --> */}
                <div className="col ">
                    <h4>О магазине</h4>
                    <ul>
                        <li><a href="#">Иконы</a></li>
                        <li><a href="#">Книги</a></li>
                        <li><a href="#">Сувенирная продукция</a></li>
                    </ul>

                </div>
                {/* <!-- Рассылка --> */}
                <div className="col " >
                    <div className='formBackground' >                        
                        <h5 className='formLabel'>РАССЫЛКА</h5>
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="check"/>
                                <label className="form-check-label">Нажимая на кнопку, я принимаю условия соглашения.</label>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Нижняя полоса */}
    <div className="container-fluid " style={{backgroundColor: " #6C757D"}}>
        <div className="text-white container bottomLineLayout" >
            <div className="row">
                <div className="col-6">
                    <a href="#">Наверх</a>
                </div>
                <div className="col-6" style={{textAlign:"right"}}>
                    <p>© Музей-Заповедник Кижи, 2023</p>
                </div>
            </div>
        </div>
    </div>
    </>
    )   
}

export default Footer;