import React from 'react'
import './Gallery.css'
import { Link } from 'react-scroll';
import gallery_5 from '../../assets/gallery-1.png'
import gallery_6 from '../../assets/gallery-2.png'
import gallery_7 from '../../assets/gallery-3.png'
import gallery_8 from '../../assets/gallery-4.png'


const Gallery = () => {
  return (
    <div className='gallery'>
        <div className="gallery_1">
            <img src={gallery_5}lt=""/>
            <div className="caption">
                
                <h2> என் குழந்தை</h2>
            </div>
        </div>
        <div className="gallery_1">
            <img src={gallery_6}lt=""/>
            <div className="caption">
                
                <h2>என் கர்ப்பம்</h2>
            </div>
        </div>
        <div className="gallery_1">
            <img src={gallery_7}lt=""/>
            <div className="caption">
                
                <h2>என் உடல்நலம்</h2>
            </div>
        </div>
        <div className="gallery_1">
            <img src={gallery_8}lt=""/>
            <div className="caption">
                
                <h2>தாய்ப்பால் ஊட்டுவதில் பொருந்தக்கூடிய தன்மை</h2>
            </div>
        </div>
      </div>


        
   
  );
}

export default Gallery