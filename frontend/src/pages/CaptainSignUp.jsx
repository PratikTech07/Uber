import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [userData, setUserData] = useState({})



    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            fullname: {
                firstName: firstName,
                lastName: lastName
            },
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
                        className='w-14 mb-10 '
                        src="https://imgs.search.brave.com/Wma8R9Glr0EYWbJUVMoFxiR8rM5Fe_UdZ2yQ3sLdmAc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLnBu/Z2tpdC5jb20vcG5n/L3NtYWxsLzMtMzky/MTlfdWJlci1sb2dv/LXBuZy11YmVyLWxv/Z28tMjAxOC1wbmcu/cG5n" alt="" />


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
                    <p className='text-center mt-3'>Join fleet ?  <Link to='/captain-login' className='text-blue-500 underline' > Login As Captain </Link></p>
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

export default CaptainSignUp