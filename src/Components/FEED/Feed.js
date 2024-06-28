import React, { useState } from 'react';
import './feed.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Feed() {
  const navigate = useNavigate();
  const [parentName, setParentName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [stopTime, setStopTime] = useState('');
  const [breastSide, setBreastSide] = useState('');
  const [supplement, setSupplement] = useState('');
  const [painLevel, setPainLevel] = useState(0);
  const [nippleShape, setNippleShape] = useState('');
  const [nippleColor, setNippleColor] = useState('');
  const [milkBlister, setMilkBlister] = useState('');
  const [nippleCracks, setNippleCracks] = useState('');
  const [feelings, setFeelings] = useState('');
  const [presentWeight, setPresentWeight] = useState('');

 const AddFeedInfo = async () => {
    try {
      const formField = {
        parentName,
        startTime,
        stopTime,
        breastSide,
        supplement,
        painLevel,
        nippleShape,
        nippleColor,
        milkBlister,
        nippleCracks,
        feelings,
        presentWeight,
      };
  
      const response = await axios.post('https://vasubanu.pythonanywhere.com/breastfeed-detail/', formField);
      console.log(response.data);
      navigate('/profile');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(parentName, startTime, stopTime, breastSide, supplement, painLevel, nippleShape, nippleColor, milkBlister, nippleCracks, feelings);
    setParentName('');
    setStartTime('');
    setStopTime('');
    setBreastSide('');
    setSupplement('');
    setPainLevel(0);
    setNippleShape('');
    setNippleColor('');
    setMilkBlister('');
    setNippleCracks('');
    setFeelings('');
    setPresentWeight('');

  };

  return (
    <div className='feed'>
      <div className='headingfeed'>

        <h2>தாய்ப்பால் கொடுக்கும் விபரங்கள்</h2>


      </div>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="parentName">குழந்தையின் தாயார் பெயர்:</label>
          <input type="text" id="parentName" value={parentName} onChange={(e) => setParentName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="startTime">தாய்ப்பாலூட்டல் தொடக்க நேரம்:</label>
          <input type="time" id="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </div>
        <div>
          <label htmlFor="stopTime">தாய்ப்பாலூட்டல் முடிவு நேரம்:</label>
          <input type="time" id="stopTime" value={stopTime} onChange={(e) => setStopTime(e.target.value)} />
        </div>
        <div>
          <label htmlFor="breastSide"> குழந்தைக்குபாலூட்ட எந்த மார்பகத்தைப் பயன்படுத்தினீர்கள்?</label>
          <select id="breastSide" value={breastSide} onChange={(e) => setBreastSide(e.target.value)}>
            <option value="">தேர்ந்தெடு </option>
            <option value="இடது">இடது</option>
            <option value="வலது">வலது</option>
            <option value="இரண்டும் இல்லை">இரண்டும் இல்லை</option>
            <option value="இரண்டும்">இரண்டும்</option>
          </select>
        </div>
        <div>
          <label htmlFor="supplement">உங்கள் குழந்தைக்கு எப்படி பால் கொடுத்தீர்கள்?</label>
          <select id="supplement" value={supplement} onChange={(e) => setSupplement(e.target.value)}>
            <option value="">தேர்ந்தெடு </option>
            <option value="தாய்ப்பால்">தாய்ப்பால்🤱🏻</option>
            <option value="பவுடர்பால்">பவுடர்பால்🍼</option>
          </select>
        </div>
        <div>
          <label htmlFor="painLevel">தாய்ப்பால் கொடுக்கும் போது ஏதேனும் வலியை உணர்ந்தீர்களா?</label>
          <input type="range" id="painLevel" min="0" max="10" value={painLevel} onChange={(e) => setPainLevel(parseInt(e.target.value))} />
          <span>{painLevel} ({painLevel === 0 ? 'வலி இல்லை' : painLevel >= 1 && painLevel <= 3 ? 'குறைந்த வலி' : painLevel >= 4 && painLevel <= 6 ? 'நடுத்தர வலி' : 'அதிக வலி'})</span>
        </div>
        <div>
          <label htmlFor="nippleShape">தாய்ப்பால் கொடுத்தபின் முலைக்காம்பின் வடிவம் என்ன?</label>
          <select id="nippleShape" value={nippleShape} onChange={(e) => setNippleShape(e.target.value)}>
            <option value="">தேர்ந்தெடு </option>
            <option value="வட்ட வடிவ முலைக்காம்பு">வட்ட வடிவ முலைக்காம்பு</option>
            <option value="கூம்புவடிவ முலைக்காம்பு">கூம்புவடிவ முலைக்காம்பு</option>
          </select>
        </div>
        <div>
          <label htmlFor="nippleColor">தாய்ப்பால் கொடுத்தபின் முலைக்காம்பின் நிறம் என்ன?</label>
          <select id="nippleColor" value={nippleColor} onChange={(e) => setNippleColor(e.target.value)}>
            <option value="">தேர்ந்தெடு </option>
            <option value="கருப்பு நிறம்">கருப்பு நிறம்</option>
            <option value="வெள்ளை நிறம்">வெள்ளை நிறம்</option>
            <option value="சிவப்பு நிறம்">சிவப்பு நிறம்</option>
          </select>
        </div>
        <div>
          <label htmlFor="milkBlister">உங்கள் மார்பகங்களில் ஏதேனும் புண் இருக்கிறதா?</label>
          <select id="milkBlister" value={milkBlister} onChange={(e) => setMilkBlister(e.target.value)}>
            <option value="">தேர்ந்தெடு </option>
            <option value="இல்லை">இல்லை</option>
            <option value="ஆம்">ஆம்</option>
          </select>
        </div>
        <div>
          <label htmlFor="nippleCracks">உங்கள் முலைக்காம்புகளில் ஏதேனும் விரிசல் இருக்கிறதா?</label>
          <select id="nippleCracks" value={nippleCracks} onChange={(e) => setNippleCracks(e.target.value)}>
            <option value="">தேர்ந்தெடு </option>
            <option value="இல்லை">இல்லை</option>
            <option value="ஆம்">ஆம்</option>
          </select>
        </div>
        <div>
          <label htmlFor="feelings">தாய்ப்பால் கொடுத்தபின் நீங்கள் எப்படி உணருகிறீர்கள்?</label>
          <select id="feelings" value={feelings} onChange={(e) => setFeelings(e.target.value)}>
            <option value="">தேர்ந்தெடு </option>
            <option value="நிம்மதியாக">நிம்மதியாக😇</option>
            <option value="மகிழ்ச்சியான உணர்வு">மகிழ்ச்சியான உணர்வு😀</option>
            <option value="சோக உணர்வு">சோக உணர்வு😔</option>
            <option value="தீர்ந்து போன உணர்வு">தீர்ந்து போன உணர்வு🤯</option>
            <option value="கவலை உணர்வு">கவலை உணர்வு😰</option>
          </select>
        </div>
        <div>
          <label htmlFor="presentWeight">குழந்தையின் தற்போதைய எடை (கிலோகிராமில்):</label>
          <input type="text" id="presentWeight" value={presentWeight} onChange={(e) => setPresentWeight(e.target.value)} />
        </div>

        <button type="submit" onClick={AddFeedInfo}>சரி</button>
      </form>
    </div>
  );
}

export default Feed;
