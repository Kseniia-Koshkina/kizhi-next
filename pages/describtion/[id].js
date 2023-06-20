import Head from 'next/head'
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
    
      <div className="containerImg container-fluid" >
        <Header></Header>
        <Describtion item={postData}></Describtion>
      </div>    
      <Footer></Footer>
      
  
      
      </>
    )
  }
  