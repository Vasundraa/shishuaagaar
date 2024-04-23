import React, { useState } from 'react';
import './Annotation.css';
import axios from 'axios';

function Userinfo({ currentUser }) {
    const [momDetails, setMomDetails] = useState({
        name: '',
        dateOfBirth: '',
        pregnant: '',
    });

    const [isNewUser, setIsNewUser] = useState(true);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMomDetails({
            ...momDetails,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Make API call to save user info
        axios.post('http://localhost/api/Userinfo_detail/', momDetails)
            .then(response => {
                setIsNewUser(false); // Update state to indicate user is no longer new
                console.log('User info saved successfully');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className='baby'>
            <h2>சுயவிவரம்</h2>
            <div className='wrapper'>
                {isNewUser && (
                    <form onSubmit={handleSubmit}>
                        <label>
                            பெயர்:
                            <input
                                type="text"
                                name="name"
                                value={momDetails.name}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label className='lin'>
                            நீங்கள் இப்போது கர்ப்பமாக இருக்கிறீர்களா?
                            <select
                                name="pregnant"
                                value={momDetails.pregnant.toString()} // Convert boolean to string
                                onChange={handleInputChange}
                            >
                                <option value="" disabled hidden>தேர்ந்தெடு</option>
                                <option value="true">ஆம்</option> {/* Use string values 'true' and 'false' */}
                                <option value="false">இல்லை</option>
                            </select>

                        </label>
                        <br />
                        {momDetails.pregnant && (
                            <label>
                                மதிப்பிடப்பட்ட குழந்தை பிறக்கும் தேதி
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={momDetails.dateOfBirth}
                                    onChange={handleInputChange}
                                />
                            </label>
                        )}
                        <br />

                        <label>மின்னஞ்சல் முகவரி:</label><br /> {currentUser ? currentUser.email : ''}

                        <br />
                        <br />
                        <button type="submit">சரி</button>
                    </form>
                )}

                {!isNewUser && (
                    <div>
                        <h3>User Info:</h3>
                        <p>Name: {momDetails.name}</p>
                        {/* Display other user info fields */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Userinfo;
