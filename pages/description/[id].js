import Head from 'next/head'
import Header from "../../components/header" 
import Footer from "../../components/footer" 
import Describtion from "../../components/description";


export async function getStaticPaths() {
    let data=[
      {
        id:'1',
        name:"default",
        price:1540,
        images:[
            "default.jpg",
        ],
        describtion:"no description",
        rating:0
      },
    ];
    const response = await fetch("http://localhost:3000/api/getProducts",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    });

    data = await response.json();
    let paths=[];
    data.map((item) => {
      paths.push( {
        params: {
          id: item.id,
        }
      });
    });
    return {
      paths,
      fallback: false,
    };
  }

export async function getStaticProps({ params }) {
  let postData, data=[
    {
        id:'1',
        name:"default",
        price:1540,
        images:[
            "default.jpg",
            
        ],
        description:"no description",
        rating:0
    },
  ];
  const response= await fetch("http://localhost:3000/api/getProducts");
  data = await response.json();
  

  for(let i = 0; i< data.length;i++){
      if (data[i].id==params.id){
        postData =  data[i];
      }
  } 
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
  