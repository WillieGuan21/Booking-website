import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import './MiniCarousel.css';

function Example(props) {

  const items = [
    {
      img: ['images/d02.png', 'images/d03.png', 'images/d04.png', 'images/d05.png', 'images/d06.png']
    },
    {
      img: ['images/d03.png', 'images/d05.png', 'images/d06.png', 'images/d02.png', 'images/d04.png']
    }
  ]

  const gotimgtext =(e)=>{
    props.gotimage(e)
  }

  return (
    <Carousel
    // next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
    // prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
    >
      {
        items.map((item, i) => <Item key={i} item={item} gotimgtext={gotimgtext}/>)
      }

    </Carousel>
  );
}

function Item(props) {
  const { img } = props.item

  return (
    <Paper sx={{ boxShadow: 'none' }}>
      <div className='card-container'>
        {img.map((image, index) => (
          <div className='cards' key={index}>
            <img src={image} alt={index} onClick={()=>props.gotimgtext(image)}/>
          </div>
        ))}
      </div>
    </Paper>
  )
}

export default Example;