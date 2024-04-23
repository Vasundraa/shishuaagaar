import React, { useState, useEffect } from 'react';
import './LoginForm.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// eslint-disable-next-line no-unused-vars
import { auth, provider } from '../firebase/config.js';
// eslint-disable-next-line no-unused-vars
import { sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [rememberMe, setRememberMe] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [value, setValue] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
                navigate('/Home');
            } else {
                setIsAuthenticated(false);
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    useEffect(() => {
        const storedCredentials = localStorage.getItem('userCredentials');
        if (storedCredentials && rememberMe) {
            const credentials = JSON.parse(storedCredentials);
            signInWithEmailAndPassword(auth, credentials.email, credentials.password)
                .then(() => {
                    setIsAuthenticated(true);
                    navigate('/Home');
                })
                .catch((error) => {
                    setError(error.message);
                });
        }
    }, [rememberMe, navigate]);

    const handleCredentials = (e) => {
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    }

    const handleSignin = (e) => {
        e.preventDefault();
        setError("");
        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then(() => {
                setIsAuthenticated(true);
                if (rememberMe) {
                    localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
                } else {
                    localStorage.removeItem('userCredentials');
                }
                navigate('/Home');
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    }

    const passwordInputType = showPassword ? 'text' : 'password';

    function handlePasswordReset() {
        const email = prompt('Please enter your email address');
        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('Password reset email sent! Please check your inbox for instructions.');
                })
                .catch((error) => {
                    setError(error.message);
                });
        } else {
            setError('Email is required for password reset.');
        }
    }








    useEffect(() => {
        setValue(localStorage.getItem('email'))
    }, [])

    return (
        <div className='body'>
            <div className='wrapper'>
                <form className='loginform' onSubmit={handleSignin}>
                    <h1>உள்நுழை</h1>
                    <div className="input-box">
                        <input
                            onChange={handleCredentials}
                            type="text"
                            placeholder='மின்னஞ்சல் முகவரி'
                            required
                            name="email"
                            value={userCredentials.email}
                            style={{
                                borderRadius: '40px',
                                border: '2px solid rgb(192, 118, 192)',
                                outline: 'none',
                                color: 'black',
                                padding: '20px 45px 20px 20px',
                            }}
                        />

                        <MdEmail className='icon' />
                    </div>
                    <div className="input-box">
                        <input onChange={handleCredentials} type={passwordInputType} placeholder='பாஸ்வர்ட்' required name="password" value={userCredentials.password} />
                        {showPassword ? <FaEye className='icon' onClick={handlePasswordToggle} /> : <FaEyeSlash className='icon' onClick={handlePasswordToggle} />}
                    </div>
                    <div className='remember-forgot'>
                    <button onClick={handlePasswordReset} style={{  background: 'none', textDecoration: 'none', cursor: 'pointer',  color: 'black' }}>பாஸ்வர்டை மறந்துவிட்டீர்களா?</button>



                    </div>

                    <br />
                    <button type="submit">உள்நுழை</button>
                    {error && <div className="error">{error}</div>}


                    {/* <div className='register-link'>
                        <p>நீங்கள் புதிய பயனரா? <a href="/Signup">பதிவு செய்</a></p>
                    </div>
                   <div className="google-signin">
                            <button className="google-signin-button" onClick={handleGoogleSignIn}>Sign in with Google</button>
                        </div>*/}



                </form>
            </div>
        </div>
    )
}

export default LoginForm;
