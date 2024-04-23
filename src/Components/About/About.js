import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt=" " className='about-img'/>
            <img src={play_icon} alt=" " className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
        <h1>வீடியோ தகவல்கள்</h1>
            
        </div>
            
    </div>
  )
}

export default About

