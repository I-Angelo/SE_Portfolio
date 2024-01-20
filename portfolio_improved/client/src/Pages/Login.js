// Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/LogIn.css'
import { motion } from "framer-motion"
import LoginTitle from '../layouts/LoginTitle';

const Login = ({ onLogin }) => {

    const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0.5}}
    const enterAnimation = { opacity: 1, transition: {duration: 1, delay: 0.5}}


    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [showWelcome, setShowWelcome] = useState(false);

    useEffect(() => {
        console.log('useEffect triggered', attempts, username, password);
        if (attempts === 3 && username === 'IvanDarioAngulo' && password === 'Jobs2024$$') {
        // Additional logic after showing the welcome page
                onLogin();

                // Redirect to another page after the timeout
                const timeout = setTimeout(() => {
                    console.log('Navigating to /welcome');
                    navigate('/welcome'); // Use history.push to navigate without a full page reload
                }, 1000);

                // Clear the timeout if the component unmounts
                return () => clearTimeout(timeout);
                }
    }, [attempts, username, password, onLogin, navigate]);

    const handleLogin = () => {
        if (password === 'Jobs2024$$') {
            console.log('Correct password entered!');
            setShowWelcome(true);
            // Redirect to another page after the timeout
            const timeout = setTimeout(() => {
                console.log('Navigating to /welcome');
                navigate('/welcome'); // Use history.push to navigate without a full page reload
            }, 1000);

            // Clear the timeout if the component unmounts
            return () => clearTimeout(timeout);
            
        } else {
        setAttempts(attempts + 1);
        alert(`Invalid password. Attempt ${attempts + 1} of 3. Please try again.`);
        }
    };
    
    return (
        <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}>
            <LoginTitle />
        <div className='login-page'>
            <div className='login'>
            {/* <h2>Login Page</h2> */}
                <div className='login-info'>
                {attempts >= 3 ? (
                    <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
            ) : null}
                <br />
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                <br />
                    
                </div>
                <div className='btn-login'>
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>

        </div>
        </motion.div>
    );
    };

export default Login;
