import React from 'react';
import { Link } from "react-router-dom"; 
import '../breastfeedingbasics.css';

const Aboutme = () => {
  return (
    <div className='page1'>
    <div className='overall'>
      <h2 className='heading'>தாய்பால் ஊட்டுதல்</h2>
      <p className='question'>தாய்ப்பால் கொடுக்கும் போது ஏற்படும் பிரச்சனைகள்?</p>
      </div>
        <Link to="/A2" className='link-heading'>
          <h4>தாய்ப்பாலை வெளிப்படுத்தும் முறை</h4>
        </Link>      
        <Link to="/A1" className='link-heading'>
          <h4>தாய்ப்பால் கொடுக்கும் போது ஏற்படும் பிரச்சனைகள்?</h4>
        </Link>
        <Link to="/B2" className='link-heading'>
          <h4>தாய்ப்பால் கொடுப்பது பற்றிய பொதுவான கேள்விகள்</h4>
        </Link>  
     
    </div>
  );
};

export default Aboutme
