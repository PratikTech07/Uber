import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'



const CaptainSignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState(0)
    const [vehicleType, setVehicleType] = useState('')

    const navigate = useNavigate();





    const [ captain, setCaptain ] = useContext(CaptainDataContext);

    //select vehicle
    const [selectedVehicle, setSelectedVehicle] = useState('');
    const handleChange = (e) => {
        setSelectedVehicle(e.target.value);
    };
     



    const submitHandler = async (e) => {
        e.preventDefault();
        
        const captainData = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                type: selectedVehicle
            }
        }

        console.log(captainData)

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData);

        if (response.status === 201) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }

       
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setVehicleCapacity(0);
        setVehicleColor('');
        setVehiclePlate('');
        setSelectedVehicle('');
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
                        <h3 className='text-lg font-medium mt-2 '>Enter Vehicle Details</h3>
                        <div className='flex justify-between gap-4 items-center mr-2'>
                            <input
                                value={vehicleColor}
                                onChange={(e) => setVehicleColor(e.target.value)}
                                className='bg-[#eeee] rounded w-1/2 px-4 py-2 mt-2 border  placeholder:text-base'
                                type="text"
                                required placeholder='Vehicle Color'
                            />
                            <input
                                value={vehiclePlate}
                                onChange={(e) => setVehiclePlate(e.target.value)}
                                className='bg-[#eeee] rounded px-4 w-1/2 py-2 mt-2 border  placeholder:text-base'
                                type="text"
                                required placeholder='Vehicle Plate Number '
                            />
                        </div>
                        <div className='flex justify-between gap-4 items-center mr-2'>
                            <input
                                value={vehicleCapacity}
                                onChange={(e) => setVehicleCapacity(e.target.value)}
                                className='bg-[#eeee] rounded w-1/2 px-4 py-2 mt-2 border  placeholder:text-base'
                                type="number"
                                required placeholder='Vehicle Capacity'
                            />
                            <div >
                                
                                <select
                                    id="vehicle-select"
                                    value={selectedVehicle}
                                    onChange={(e)=>{handleChange(e)}}
                                    className='p-2 bg-[#eeee] rounded px-4 py-2 mt-2 border '
                                >
                                    <option value="" disabled> Select an Vehicle  </option>
                                    <option value="car">car</option>
                                    <option value="auto">auto</option>
                                    <option value="bike">motorcycle</option>
                                </select>

                            </div>
                        </div>

                        <button
                            className='bg-[#111] text-white font-semibold  rounded px-4 py-2 mt-5 border w-full placeholder:text-bade'

                        > Create Captain Account </button>
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