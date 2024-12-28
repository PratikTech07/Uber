import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const CaptainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setCaptainData({
            email: email,
            password: password
        })

       
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
                            onChange={(e) => { setPassword(e.target.value) }}
                            className='bg-[#eeee] rounded px-4 py-2 mt-2 border w-full placeholder:text-bade'
                            type="password"
                            required placeholder='Enter your password'
                        />
                        <button
                            className='bg-[#111] text-white font-semibold  rounded px-4 py-2 mt-5 border w-full placeholder:text-bade'

                        >Login </button>
                    </form>
                    <p className='text-center mt-3'>Join fleet ?  <Link to='/captain-signup' className='text-blue-500 underline' > Register As Captain </Link></p>
                </div>
                <div>
                    <Link
                        to='/login'
                        className='bg-[#d5622d] flex items-center justify-center mb-5  text-white font-semibold  rounded px-4 py-2 mt-5 border w-full placeholder:text-bade'

                    >Sign in As User </Link>
                </div>
            </div>
        </div>
    )
}

export default CaptainLogin