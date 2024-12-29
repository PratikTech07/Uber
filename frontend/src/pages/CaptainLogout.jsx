import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true; // Track if the component is mounted

        const handleLogout = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                localStorage.clear(); // Clear any remaining data
                if (isMounted) navigate('/captain-login');
                return;
            }

            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status === 200) {
                    localStorage.clear(); // Clear all stored data
                    if (isMounted) navigate('/captain-login');
                }
            } catch (error) {
                console.error('Logout failed:', error.response ? error.response.data : error.message);
                if (error.response && error.response.data.message === 'Token has been invalidated') {
                    // Token is invalid, clear local storage and navigate to login
                    localStorage.clear();
                    if (isMounted) navigate('/captain-login');
                } else {
                    // Handle other errors
                    console.error('Logout failed:', error.response ? error.response.data : error.message);
                    localStorage.clear();
                    if (isMounted) navigate('/captain-login');
                }
            }
        };

        handleLogout();

        return () => {
            isMounted = false; // Cleanup function to set isMounted to false
        };
    }, [navigate]); // Empty dependency array ensures this runs only once

    return <div>Logging out...</div>;
};

export default CaptainLogout;