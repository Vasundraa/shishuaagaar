import React from 'react';
import { Link } from "react-router-dom"; 
import './breastfeedingbasics.css';

const Breastfeedingbasics = () => {
  return (
    <div className='page1'>
    <div className='overall'>
      <h2 className='heading'>தாய்ப்பால் ஊட்டுதல்</h2>
      <h3 className='subheading'>தாய்ப்பால் ஊட்டுவதற்கான அடிப்படை முறைகள்</h3>
      <p className='question'>தாய்ப்பால் கொடுக்கும் முறைகளைப் பற்றி உங்களுக்கு என்ன கவலைகள் உள்ளன?</p>
      </div>
        <Link to="/B1" className='link-heading'>
          <h4>தாய்ப்பாலின் அறிமுகம்</h4>
        </Link>
        <Link to="/B3" className='link-heading'>
          <h4>தாய்ப்பால் கொடுக்கும் முறை</h4>
        </Link>
        <Link to="/B4" className='link-heading'>
          <h4>தாய்ப்பால் கொடுக்கும் சரியான நிலைகள்</h4>
        </Link>      
        <Link to="/B5" className='link-heading'>
          <h4>குழந்தை ஏப்பம் விடுதல்</h4>
        </Link>
       
     
    </div>
  );
};

export default Breastfeedingbasics
