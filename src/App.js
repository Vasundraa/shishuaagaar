import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import LoginForm from './Components/Login/LoginForm';
import Signup from './Components/Login/Signup';
import Home from './Components/Home/Home';
import Logout from './Components/Logout/Logout';
import Profile from './Components/Profile/Profile';
import Feed from './Components/FEED/Feed';
import Poop from './Components/POOP/Poop';
import Sizeandweight from './Components/SIZEANDWEIGHT/Sizeandweight';
import Breastfeedingbasics from './PAGE1/Breastfeedingbasics';
import B1 from './PAGE1/Bans/B1';
import B2 from './PAGE1/Bans/B2';
import B3 from './PAGE1/Bans/B3';
import B4 from './PAGE1/Bans/B4';
import B5 from './PAGE1/Bans/B5';
import ShowProduct from './Components/showProduct/ShowProduct';
import Feedinfo from './Components/showProduct/Feedinfo';
import Poopinfo from './Components/showProduct/Poopinfo';
import Viewdetail from './Components/VIEW/Viewdetail';
import Videos from './Components/VIDEO/Videos';
import Aboutme from './PAGE1/Aboutme/Aboutme';
import A1 from './PAGE1/Aboutme/A1';
import A2 from './PAGE1/Aboutme/A2';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWRan-BweM5VNC2WWfhjqe5BuPZ36z1yM",
  authDomain: "lactapp-login.firebaseapp.com",
  projectId: "lactapp-login",
  storageBucket: "lactapp-login.appspot.com",
  messagingSenderId: "967822980302",
  appId: "1:967822980302:web:c614e3a646f51c8b3acc9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setInitializing(false);
    });

    return unsubscribe;
  }, []); 

  if (initializing) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Logout" element={<Logout />} />
        <Route
          path="/Home"
          element={
            user ? (
              user.email === 'veluyoga22@gmail.com' ? (
                <Navigate to="/Viewdetail" />
              ) : (
                <Home />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/Profile" element={user? <Profile /> :  <Navigate to="/login" />} />
        <Route path="/Feed" element={user? <Feed /> :  <Navigate to="/login" />} />
        <Route path="/Poop" element={user? <Poop /> :  <Navigate to="/login" />} />
        <Route path="/Sizeandweight" element={user? <Sizeandweight /> :  <Navigate to="/login" />} />
        <Route path="/Breastfeedingbasics" element={user? <Breastfeedingbasics /> :  <Navigate to="/login" />} />
        <Route path="/B1" element={user? <B1 /> :  <Navigate to="/login" />} />
        <Route path="/B2" element={user? <B2 /> :  <Navigate to="/login" />} />
        <Route path="/B3" element={user? <B3 /> :  <Navigate to="/login" />} />
        <Route path="/B4" element={user? <B4 /> :  <Navigate to="/login" />} />
        <Route path="/B5" element={user? <B5 /> :  <Navigate to="/login" />} />
        <Route path="/A1" element={user? <A1 /> :  <Navigate to="/login" />} />
        <Route path="/A2" element={user? <A2 /> :  <Navigate to="/login" />} />
        <Route path='/Aboutme' element={user? <Aboutme/> :  <Navigate to="/login" />} />
        <Route path="/ShowProduct" element={user? <ShowProduct /> :  <Navigate to="/login" />} />
        <Route path="/Feedinfo" element={user? <Feedinfo /> :  <Navigate to="/login" />} />
        <Route path="/Poopinfo" element={user? <Poopinfo /> :  <Navigate to="/login" /> } />
        <Route path="/Viewdetail" element={user? <Viewdetail /> : <Navigate to="/login" />} />
        <Route path="/Videos" element={user? <Videos /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
