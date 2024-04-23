import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Menus from '../Menus/Menus';
import Title from '../Title/Title';
import About from '../About/About';

import Contact from '../Contact Us/Contact';
import Footer from '../Footer/Footer';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Profile from '../Profile/Profile';

const Home = () => {
  const [playState, setPlayState] = useState(false);
  
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <Title subTitle='' title='லாக்ட் பயன்பாடு' />
        <div id="menus-section">
          <Menus />
        </div>
        <Title title="சேவைகள்" style={{ fontSize: '24px' }} ></Title>
        <Title subTitle='எங்களை தொடர்பு கொள்ளமேம்படுத்த எங்களுக்கு உதவ படிவத்தை நிரப்பவும்' title='எங்களை தொடர்பு கொள்ள' />
        <div id="contact-section">
          <Contact />
        </div>
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default Home;