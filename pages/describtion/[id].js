import "bootstrap/dist/css/bootstrap.min.css";
import Head from 'next/head'
import Script from 'next/script'
import Header from "../../components/header" 
import Footer from "../../components/footer" 
import Describtion from "../../components/description";

import { getAllPostIds,getPostData } from '../../lib/allItems.js';

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }

export async function getStaticProps({ params }) {
const postData = getPostData(params.id);
return {
    props: {
        postData,
    },
};
}

export default function Home({ postData }) {
    return (
      <>
      <Head>
        <title>Музей-Заповедник Кижи</title>
      </Head>
      <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></Script>
      <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></Script>
    
      <div className="containerImg container-fluid" >
        <Header></Header>
        <Describtion item={postData}></Describtion>
      </div>    
      <Footer></Footer>
      
  
      
      </>
    )
  }
  