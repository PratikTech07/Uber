import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const UserProtectedWrapper = ({children}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [ user, setUser ] = useContext(UserDataContext);

    const [ isLoading, setIsLoading ] = useState(true);
    
    
    useEffect(() => {
        if(!token){
            navigate('/login');
            return;
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                const data = response.data;
                setUser(data.user);
                
                setIsLoading(false);
            }
        }).catch(error => {
            localStorage.removeItem('token');
            navigate('/login');
        });
    }, [token, navigate, setUser]);
    
    console.log(user)
    if (isLoading) {
        return <div>Loading...</div>;
      
    }



    

  return (
    
    <>{children}</>
  )
}

export default UserProtectedWrapper