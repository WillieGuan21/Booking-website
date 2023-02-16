import React, { useState } from 'react'
import ImagePicker from 'react-image-picker'
import './PicturePicker.css'


function PicturePicker (props) {
  // const imageList = [
  //   { img: '/images/hotel.png' },
  //   { img: '/images/apartment.png' },
  //   { img: '/images/motel.png' },
  //   { img: '/images/B&B.png' },
  //   { img: '/images/backpacker.png' },
  // ];
  const [image, setImage] = useState([]);
  const onPicks = (image) =>{
    setImage(image)
  };
  return(
    
    <div>
        <ImagePicker 
          images={props.imageList.map((image, i) => ({src: image.img, value: i}))}
          onPick={onPicks}
          multiple
        />
        {/* <button type="button" onClick={() => console.log(image)}>OK</button> */}
    </div>
    
  )
}

export default PicturePicker;