
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
//import phone_icon from '../../assets/phone-icon.png'
//import location_icon from '../../assets/location-icon.png' 
import white_arrow from '../../assets/white-arrow.png'
//import { FormControlLabel, Checkbox } from '@mui/material'
import React,{useState} from "react";
// import {FaStar} from "react-icons/fa"
const Contact = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
};

const[setResult]= React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "166fd3ce-4a11-4cf3-96a5-2ac7c3b0ab72");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Order Placed");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Shihu Aagaar<img src={msg_icon} alt=""/></h3>
            <p>கீழே காட்டப்பட்டுள்ள விவரங்களைப் பயன்படுத்தவும். உங்கள் கருத்து, கேள்விகள் மற்றும் பரிந்துரைகளை நாங்கள் பாராட்டுகிறோம்.</p>
            <ul>
                <li><img src={mail_icon} alt=""/>Contact@LactApp.com</li>
               {/* <li><img src={phone_icon} alt=""/>+91 0000000000</li>
                <li><img src={location_icon} alt=""/>77 Poo Market , Townhall<br/>Coimbatore</li>*/}
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>இந்த பயன்பாட்டில் ஏதேனும் சிக்கல்கள் இருந்தால் உடனடியாக உங்கள் கருத்துக்களை கீழே தெரிவிக்கவும்</label>
                <textarea name='message' rows="3"  required></textarea>
                <label>இந்த பயன்பாட்டில் ஏதேனும் மேம்பாடுகள் தேவை என்றல் கீழே உங்கள் கருத்துக்களை தெரிவிக்கவும்.</label>
                <textarea name='message' rows="3"  required></textarea>
                <label>பயன்பாட்டைப் பற்றிய உங்கள் கருத்து</label>
                <textarea name='message' rows="3"  required></textarea>
                
            </form>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <input type="radio" name="option" value="0-20%" onChange={handleOptionChange} checked={selectedOption === '0-20%'} />
    <label style={{ marginRight: '10px' }}>0-20%</label>
    
    <input type="radio" name="option" value="21-40%" onChange={handleOptionChange} checked={selectedOption === '21-40%'} />
    <label style={{ marginRight: '10px' }}>21-40%</label>
    
    <input type="radio" name="option" value="41-60%" onChange={handleOptionChange} checked={selectedOption === '41-60%'} />
    <label style={{ marginRight: '10px' }}>41-60%</label>
    
    <input type="radio" name="option" value="61-80%" onChange={handleOptionChange} checked={selectedOption === '61-80%'} />
    <label style={{ marginRight: '10px' }}>61-80%</label>
    
    <input type="radio" name="option" value="81-100%" onChange={handleOptionChange} checked={selectedOption === '81-100%'} />
    <label style={{ marginRight: '10px' }}>81-100%</label>
    <p><label style={{ fontWeight: 'bold' }}>Selected option: {selectedOption}</label></p>

</div>

        <input type="hidden" name="from_name" value="Order"></input>
                <input type="hidden" name="subject" value="Unveiling a recent order received"/>
                <button type='submit' className='btn dark-btn'>முடிக்கவும் <img src={white_arrow} alt=""/></button>
                
        </div>
        

    </div>
  )
}
export default Contact