import React from 'react'
import './LoginForm.css';
import { MdEmail } from "react-icons/md";
import { useState } from 'react';
import { auth } from '../firebase/config.js';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
const Signup = () => {
 
    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
    const navigate = useNavigate();

    function handleCredentials(e) {
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
        console.log(userCredentials);
    }

    function handleSignup(e) {
        e.preventDefault();
        setError("");

        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then((userCredential) => {
                console.log(userCredential.user);
                navigate('/Home');
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className='body'>
            <div className='wrapper'>
                <form className='loginform' onSubmit={handleSignup}>
                    <h1>பதிவு பக்கம்</h1>
                    <div className="input-box">
                        <input onChange={(e) => { handleCredentials(e) }} type="text" placeholder='பெயர்' required name="name" style={{
                            borderRadius: '40px',
                            border: '2px solid rgb(192, 118, 192)'

                        }} />
                        <IoPerson className='icon' />
                    </div>
                    <div className="input-box">
                        <input onChange={(e) => { handleCredentials(e) }} type="text" placeholder='மின்னஞ்சல் முகவரி' required name="email" style={{
                            borderRadius: '40px',
                            border: '2px solid rgb(192, 118, 192)'
                        }} />
                        <MdEmail className='icon' />
                    </div>
                    <div className="input-box">
                        <input onChange={(e) => { handleCredentials(e) }} type={showPassword ? "text" : "password"} placeholder='பாஸ்வர்ட்' required name="password" />
                        {showPassword ? <FaEye className='icon' onClick={togglePasswordVisibility} /> : <FaEyeSlash className='icon' onClick={togglePasswordVisibility} />}
                    </div>
                    <button type="submit">பதிவு செய்யவும்</button>
                    {
                        error &&
                        <div className="error">
                            {error}
                        </div>
                    }
                    <div className='register-link'>
                        < a href="/login"> உள்நுழை</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;
