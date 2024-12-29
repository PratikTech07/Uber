import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                localStorage.clear(); // Clear any remaining data
                navigate('/login');
                return;
            }

            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status === 200) {
                    localStorage.clear(); // Clear all stored data
                    navigate('/login');
                }
            } catch (error) {
                // console.error('Logout failed:', error.response ? error.response.data : error.message);
                // // Still redirect to login even if logout fails
                // localStorage.clear();
                // navigate('/login');
            }
        };

        handleLogout();
    }, [navigate]); // Empty dependency array ensures this runs only once

    return <div>Logging out...</div>;
};

export default UserLogout;