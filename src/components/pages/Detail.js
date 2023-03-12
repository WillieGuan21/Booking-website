import React,{useState} from 'react';
import './Detail.css';
import MiniCarousel from '../MiniCarousel';
import TargetHotel from '../TargetHotel';

function Detail (){
  const [imgsrc,setImgsrc] = useState("./images/d01.png")
  const gotcontrol = (e)=>{
    setImgsrc(e)
  }
  return(
    <div>
      <div className='detail-hero'>
        <img src={imgsrc} alt='detail-hero' />
      </div>
      <div className='detail-container'>
        <MiniCarousel gotimage={gotcontrol}/>
      </div>
      <div className='target-container'>
        <TargetHotel/>
      </div>
      
    </div>
  )
}

export default Detail;