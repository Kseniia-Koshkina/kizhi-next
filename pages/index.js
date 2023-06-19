import "bootstrap/dist/css/bootstrap.min.css";
import Head from 'next/head'
import Header from "../components/header" 
import Footer from "../components/footer" 
import Popular from '@/components/popular_content';

import "styles/App.css"

export default function Home() {
  return (
    <>
    <Head>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
      <title>Музей-Заповедник Кижи</title>
    </Head>
    <div className="containerImg container-fluid" >
      <Header></Header>
    </div>    
    <Popular></Popular>
    <Footer></Footer>
    
  
    
    </>
  )
}
