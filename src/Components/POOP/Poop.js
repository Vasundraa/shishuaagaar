import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './poop.css';

function Poop() {
  const navigate = useNavigate();
  const [time, setTime] = useState('');
  const [colour, setColour] = useState('');
  const [texture, setTexture] = useState('');
  const [parentName, setParentName] = useState(''); // Changed from setparentName to setParentName
  const [timing, setTiming] = useState('');

  const handleNameChange = (e) => {
    setParentName(e.target.value); // Changed from setparentName to setParentName
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleTimingChange = (e) => {
    setTiming(e.target.value);
  };

  const handleColourChange = (e) => {
    setColour(e.target.value);
  };

  const handleTextureChange = (e) => {
    setTexture(e.target.value);
  };

  const Addproductinfo = async () => {
    let formField = new FormData();
    formField.append('time', time);
    formField.append('colour', colour);
    formField.append('texture', texture);
    formField.append('parentName', parentName); // Changed from 'ParentName' to 'parentName'
    formField.append('timing', timing);

    try {
      const response = await axios.post('https://vasubanu.pythonanywhere.com/poop_detail/', formField);
      console.log(response.data);
      navigate('/profile');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleOkClick = (event) => {
    event.preventDefault();
    console.log('Time:', time);
    console.log('Colour:', colour);
    console.log('Texture:', texture);
    console.log('Timing:', timing);
    console.log('Parent name:', parentName);
  };

  return (
    <div className="poop-form">
      <div>
        <h2>குழந்தை👶</h2>
      </div>
      <form onSubmit={handleOkClick}>
        <div>
          <label htmlFor="parentName">குழந்தையின் தாயார் பெயர்:</label>
          <input type="text" id="parentName" value={parentName} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="timing">உங்கள் குழந்தை எப்போது சிறுநீர் கழித்தது:</label>
          <input type="time" id="timing" value={timing} onChange={handleTimingChange} />
        </div>
        <div>
          <label htmlFor="time">உங்கள் குழந்தை எப்போது மலம் கழித்தது?</label>
          <input type="time" id="time" value={time} onChange={handleTimeChange} />
        </div>
        <div>
          <label htmlFor="colour">குழந்தை மலத்தின் நிறம் என்ன?</label>
          <select id="colour" value={colour} onChange={handleColourChange}>
            <option value="">தேர்ந்தெடு </option>
            <option value="கருப்பு நிற மலம்">கருப்பு நிற மலம்</option>
            <option value="சிவப்பு நிற மலம்">சிவப்பு நிற மலம்</option>
            <option value="மென்மையான மற்றும் அடர் பச்சை நிற மலம்n">மென்மையான மற்றும் அடர் பச்சை நிற மலம்</option>
            <option value="மஞ்சள் நிற மலம்">மஞ்சள் நிற மலம்</option>
          </select>
        </div>
        <div>
          <label htmlFor="texture"> குழந்தை மலத்தின் அமைப்பு என்ன?</label>
          <select id="texture" value={texture} onChange={handleTextureChange}>
            <option value="">தேர்ந்தெடு </option>
            <option value="திரவ அமைப்பு">திரவ அமைப்பு</option>
            <option value="கடினமான அமைப்பு">கடினமான அமைப்பு</option>
            <option value="இரத்தம் கலந்த அமைப்புd">இரத்தம் கலந்த அமைப்பு</option>
          </select>
        </div>
        <button onClick={Addproductinfo}>சரி</button>
      </form>
    </div>
  );
}

export default Poop;
