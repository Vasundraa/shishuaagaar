import React from 'react';
import i1 from '../../assets/i1.jpg';
import i2 from '../../assets/i2.jpg';


const B1 = () => {
  return (
    <div className='page1'>
    <div className='overall'>
      <h2 className='heading'>தாய்ப்பால் ஊட்டுதல்</h2>
      <h3 className='subheading'>தாய்ப்பால் ஊட்டுவதற்கான அடிப்படை முறைகள்</h3>

    </div>
      <div className='answer'>
      <h3 style={{ color: '#BB0297 ' }}>தாய்ப்பாலின் அறிமுகம்:-</h3><br></br>   
      <img src={i1}  className='image' alt=""/>
      <br /><br />


<p>குழந்தைகளின் ஆரோக்கியம் மற்றும் உயிர்வாழ்வை உறுதி செய்வதற்கான மிகச் சிறந்த வழிகளில் ஒன்று தாய்ப்பால் கொடுப்பது, 6 மாதங்களுக்கு பிரத்தியேக தாய்ப்பால் கொடுப்பதால், குழந்தைக்கும் தாய்க்கும் பல நன்மைகள் கிடைக்கும். பிறகு உணவுடன்கூடிய தாய்ப்பால் இரண்டு வயது வரை கொடுக்க வேண்டும் தாய்ப்பாலில் முக்கியமான ஊட்டச்சத்துக்கள், ஆன்டிபாடிகள் உள்ளன, அவை குழந்தையின் நோயெதிர்ப்பு மண்டலத்தை வலுப்படுத்தவும், தொற்று மற்றும் நோய்களிலிருந்து பாதுகாக்கவும் உதவுகின்றன. ஒரு தாய் குழந்தை பிறந்து ஒரு மணி நேரத்திற்குள் தாய்ப்பால் கொடுக்கத் தொடங்கினால், தாய்ப்பாலின் உற்பத்தி தூண்டப்படுகிறது. முதல் நாட்களில் உற்பத்தி செய்யப்படும் பால், கொலஸ்ட்ரம் என்று அழைக்கப்படுகிறது. இது பிறந்த குழந்தைக்கு ஊட்டச்சத்து மற்றும் நோயெதிர்ப்பு பாதுகாப்புக்கான முக்கிய ஆதாரமாகும்.</p>
<br />
<img src={i2}  className='image' alt=""/>
<br /><br />
<h4 style={{ color: '#BB0297' }}><u>தாய்ப்பால் நன்மைகள்</u></h4>
<br />

<p>தாய்ப்பால் கொடுப்பது உங்களையும் உங்கள் குழந்தையையும் சில குறுகிய மற்றும் நீண்ட கால நோய்கள் மற்றும் நோய்களிலிருந்து பாதுகாக்க உதவும்.</p>
<br />

<h4 style={{ color: '#BB0297' }}><u>குழந்தைக்கு ஏற்படும் நன்மைகள்</u></h4> <br />
<h4>தாய்ப்பால் கொடுக்கும் குழந்தைகளுக்கு கீழ் வரும் நோய்களை  தடுக்கலாம் அவை,</h4>
<div className='points'>
<ul>
<li>ஆஸ்துமா</li>

<li>உடல் பருமன்</li>

<li>நீரிழிவு நோய்</li>

<li>கடுமையான சுவாச நோய்</li>

<li>காது நோய்த்தொற்று</li>

<li>இரைப்பை குடல் தொற்றுகள் வயிற்றுப்போக்கு/வாந்தி</li><br></br>
</ul>
</div>
<br />

<h4 style={{ color: '#BB0297' }}><u>தாய்க்கு ஏற்படும் நன்மைகள்</u></h4>
<br />
<h4>தங்கள் குழந்தைகளுக்கு தாய்ப்பால் கொடுக்கும் தாய்மார்களுக்கு கீழ் வரும் ஆபத்து குறைவாக இருக்கும். அவை,</h4>

<div className='points'>
<ul>
<li>மார்பக புற்றுநோய்</li>

<li>கருப்பை புற்றுநோய்</li>

<li>வகை 2 நீரிழிவுநோய்</li>

<li>உயர் இரத்த அழுத்தம்</li>

<li>உடல் எடை அதிகரிப்பு</li>

<li>இருதய நோய்</li>
</ul>
</div>
</div>      
     
      </div>
  );
};

export default B1
