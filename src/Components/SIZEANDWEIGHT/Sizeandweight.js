import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './sizeandweight.css';

function SizeAndWeight() {
  const navigate = useNavigate();

  const [parentName, setParentName] = useState('');
  const [babyDetails, setBabyDetails] = useState({
    sex: '',
    premature: '',
    date: '',
    weight: '',
    height: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBabyDetails({
      ...babyDetails,
      [name]: value
    });
  };

  const Addproductinfo = async () => {
    let formField = new FormData();
    formField.append('parentName', parentName);
    formField.append('sex', babyDetails.sex);
    formField.append('premature', babyDetails.premature);
    formField.append('date', babyDetails.date);
    formField.append('weight', babyDetails.weight);
    formField.append('height', babyDetails.height);

    try {
      const response = await axios.post('https://vasubanu.pythonanywhere.com/product/', formField);
      console.log(response.data);
      navigate('/profile');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(babyDetails);
    setBabyDetails({
      sex: '',
      premature: '',
      date: '',
      weight: '',
      height: ''
    });
  };

  return (
    <div className='size-and-weight'>
      <h2>குழந்தை தகவல்👶</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          குழந்தையின் தாயார் பெயர்:
          <input className='input'
            type="text"
            name="parentName"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
          />
        </label>
        <br />
        <label>
          குழந்தையின் பிறந்த நாள்:
          <input className='input'
            type="date"
            name="date"
            value={babyDetails.date}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          பாலினம்:
          <select
            className='input'
            id="sex"
            name="sex"
            value={babyDetails.sex}
            onChange={handleInputChange}
          >
            <option value="பெண்">பெண்</option>
            <option value="ஆண்">ஆண்</option>
          </select>
        </label>
        <label>
          <br />
          குழந்தையின் கர்ப்பகால வயது:
          <select
            className='input'
            id="premature"
            name="premature"
            value={babyDetails.premature}
            onChange={handleInputChange}
          >
            <option value="26-30">26-30 வாரங்கள் (குறைப்பிரசவ குழந்தை)</option>
            <option value="31-39">31-39 வாரங்கள் (நிறைமாத குழந்தை)</option>
            <option value="39">39 வாரங்கள் வாரங்களுக்கு மேல் (பிந்தைய பிரசவகால குழந்தை)</option>
          </select>
        </label>

        <br />
        <label>
          பிறப்பு எடை:
          <input className='input'
            type="text"
            name="weight"
            placeholder="குழந்தையின் எடை என்ன?"
            value={babyDetails.weight}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          பிறப்பு உயரம்:
          <input className='input'
            type="text"
            name="height"
            placeholder="குழந்தையின் உயரம் என்ன?"
            value={babyDetails.height}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit" onClick={Addproductinfo}>சரி</button>
      </form>
    </div>
  );
}

export default SizeAndWeight;
