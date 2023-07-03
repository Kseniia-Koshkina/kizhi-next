import Head from 'next/head'
import Header from "../components/header" 
import Footer from "../components/footer" 
import Cart from '@/components/cart'

export default function Home() {
  return (
    <>
    <Head>
      <title>Музей-Заповедник Кижи</title>
    </Head>
  
    <div className="containerImg container-fluid" >
      <Header></Header>
      <Cart></Cart>
    </div>    
    <Footer></Footer>
    

    
    </>
  )
}