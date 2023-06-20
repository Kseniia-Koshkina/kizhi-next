import 'styles/App.css';

const Star=({num})=>{
    let star = "";
    let starLeft ="";
    for(let i=0; i<5;i++){
        if(i<num)
            star+="★";
        else
            starLeft+="★";
    }
    return( 
    <>
    <span className='starrate'>{star}</span>{starLeft}
    </>)}

    export default Star;