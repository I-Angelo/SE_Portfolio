// WelcomePage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../Styles/WelcomePage.css'

const WelcomePage = ({ username, onTimeout }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Use useEffect to automatically trigger onTimeout after 5 seconds
    const timer = setTimeout(() => {
      console.log('Navigating to /data');
      navigate('/data'); // Use history.push to navigate without a full page reload
    }, 3000); // Change 1000 to 5000 to wait for 5 seconds

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [onTimeout, navigate]); // Add navigate to the dependency array

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>Redirecting in 3 seconds...</p>
      <div className='loader'></div>
      <div className='shadow'></div>
      <div className='loader-text'>
        <h3>Redirecting in 3 seconds....</h3>
        <div className='dot'>.</div>
        <div className='dot'>.</div>
        <div className='dot'>.</div>
      </div>
    </div>
  );
};

export default WelcomePage;