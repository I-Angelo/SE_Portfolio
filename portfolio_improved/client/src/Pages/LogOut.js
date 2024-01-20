import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Perform logout actions
        onLogout();

        // Redirect to the main page after logout (simulated delay of 1 second)
        const timeout = setTimeout(() => {
            navigate('/');
        }, 1000);

        // Clear the timeout if the component unmounts
        return () => clearTimeout(timeout);
    }, [onLogout, navigate]);

    return (
        <div>
            <h1>Logging Out...</h1>
            {/* You can add a loading spinner or other UI elements if needed */}
        </div>
    );
};

export default Logout;
