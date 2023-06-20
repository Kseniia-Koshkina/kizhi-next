import Head from 'next/head'
import Header from "../components/header" 
import Footer from "../components/footer" 
import Popular from '@/components/popular_content';

export default function Home() {
  return (
    <>
    <Head>
      <title>Музей-Заповедник Кижи</title>
    </Head>
  
    <div className="containerImg container-fluid" >
      <Header></Header>
      <Popular></Popular>
    </div>    
    <Footer></Footer>
    

    
    </>
  )
}
