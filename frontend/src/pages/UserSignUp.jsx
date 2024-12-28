import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const UserSignUp = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [userData, setUserData] = useState({})



const submitHandler = (e)=>{
    e.preventDefault();
    setUserData({
        fullname : {
            firstName: firstName,
            lastName: lastName},
        email: email,
        password: password
    })
    

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
}

  return (
    <div>
        <div className='p-7 flex flex-col h-screen justify-between '>
                <div >
                <img
                    className='w-14 mb-2 '
                    src="https://imgs.search.brave.com/8a_qL2VRNyA-diMocFGJ7WcipmBllWd81BXdy_uUTPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy91YmVyLWxvZ28t/YmxhY2stYW5kLXdo/aXRlLnBuZw" alt="" />


                    <form action="" onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    >
                        <h3 className='text-lg font-medium mt-2 '>Enter your Name</h3>
                        <div className='flex justify-between gap-4 items-center mr-2'>
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className='bg-[#eeee] rounded w-1/2 px-4 py-2 mt-2 border  placeholder:text-base'
                            type="text"
                            required placeholder='First Name'
                        />
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className='bg-[#eeee] rounded px-4 w-1/2 py-2 mt-2 border  placeholder:text-base'
                            type="text"
                            required placeholder='Last Name'
                        />
                        </div>
                        <h3 className='text-lg font-medium mt-2 '>Enter your Email</h3>
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
                            onChange={(e) => { setPassword(e.target.value) }}
                            className='bg-[#eeee] rounded px-4 py-2 mt-2 border w-full placeholder:text-bade'
                            type="password"
                            required placeholder='Enter your password'
                        />
                        <button
                            className='bg-[#111] text-white font-semibold  rounded px-4 py-2 mt-5 border w-full placeholder:text-bade'

                        > Register  </button>
                    </form>
                    <p className='text-center mt-3'>Join fleet ?  <Link to='/login' className='text-blue-500 underline' > Login As User </Link></p>
                </div>
                <div>
                    <p className='text-[12px] leading-tight'>
                    By proceeding, you consent to get calls, WhatsApp, or SMS messages, including by automated means, from Uber and its affiliates to the number provided.

                    </p>
                </div>
            </div>

    </div>
  )
}

export default UserSignUp