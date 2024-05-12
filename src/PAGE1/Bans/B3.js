import React from 'react';
import i3 from '../../assets/i3.jpg';


const B3 = () => {
  return (
    <div className='page1'>
      <div className='overall'>
        <h2 className='heading'>தாய்ப்பால் ஊட்டுதல்</h2>
        <h3 className='subheading'>தாய்ப்பால் ஊட்டுவதற்கான அடிப்படை முறைகள்</h3>

      </div>
      <div className='answer'>
        <h3 style={{ color: '#BB0297' }}>தாய்ப்பால் கொடுக்கும் சரியான இணைப்பு படிகள்</h3>
        <br />
        <img src={i3} className='image3' alt="" />
        <br /><br />
        <ul>

          <li>குழந்தையின் வாய் அகலமாக திறந்திருக்க வேண்டும்.</li>

          <li>கீழ் உதடு வெளிப்புறமாக திரும்பி இருக்க வேண்டும்.</li>

          <li>குழந்தையின் கன்னம் தாயின் மார்பகத்தை தொட வேண்டும்.</li>

          <li>பெரும்பாலான முலைக்காம்பு குழந்தையின் வாயின் இருக்க வேண்டும்.</li>
        </ul>
      </div>
    </div>


  );
};

export default B3
