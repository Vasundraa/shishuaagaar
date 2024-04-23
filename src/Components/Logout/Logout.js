import React, { useEffect } from 'react';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom'; // Use the existing import

const Logout = () => {
  const navigate = useNavigate(); // Use the existing navigate variable

  useEffect(() => {
    // Implement logout functionality
    const logout = async () => {
      try {
        await auth.signOut(); // Sign out the user
        navigate('/Login'); // Redirect to the login page after logout
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    logout(); // Call the logout function when the component mounts

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>Logging out...</h1>
      {/* You can add additional content or a loading spinner here */}
    </div>
  );
};

export default Logout;
