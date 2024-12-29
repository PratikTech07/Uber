import React, { useContext, useState } from 'react'
    import { Link,  useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'



const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const [user, setUser] = useContext(UserDataContext);
    const navigate = useNavigate();
    

    const submitHandler = async (e)=>{
        e.preventDefault()
        const userDate ={
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userDate);

        if(response.status === 200){
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('token', data.token)
            navigate('/home')
        }

        

        setEmail('');
        setPassword('');
    } 

    return (
        <div className='p-7 flex flex-col h-screen justify-between '>
            <div >
                <img
                    className='w-14 mb-2 '
                    src="https://imgs.search.brave.com/8a_qL2VRNyA-diMocFGJ7WcipmBllWd81BXdy_uUTPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy91YmVyLWxvZ28t/YmxhY2stYW5kLXdo/aXRlLnBuZw" alt="" />


                <form action="" onSubmit={(e)=>{
                    submitHandler(e)
                }} 
                >
                    <h3 className='text-lg font-medium mt-2 '>Enter your phone Email</h3>
                    <input
                     value={email}
                    onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#eeee] rounded px-4 py-2 mt-2 border w-full placeholder:text-bade'
                        type="email"
                        required placeholder='example@emial.com'
                    />
                    <h3 className='text-lg font-medium mt-2 '>Enter Password</h3>
                    <input
                     value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                        className='bg-[#eeee] rounded px-4 py-2 mt-2 border w-full placeholder:text-bade'
                        type="password"
                        required placeholder='Enter your password'
                    />
                    <button
                        className='bg-[#111] text-white font-semibold  rounded px-4 py-2 mt-5 border w-full placeholder:text-bade'

                    >Login </button>
                </form>
                <p className='text-center mt-3'>New Here?  <Link to='/signup' className='text-blue-500 underline' > Create New Account </Link></p> 
            </div>
            <div>
                <Link
                to='/captain-login'
                 className='bg-[#10b461] flex items-center justify-center mb-5  text-white font-semibold  rounded px-4 py-2 mt-5 border w-full placeholder:text-bade'

                >Sign in As Captain </Link>
            </div>
        </div>
    )
}

export default UserLogin