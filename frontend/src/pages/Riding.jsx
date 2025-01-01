import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full right-2 top-3 '>
                <i className="ri-home-4-line text-lg font-medium"></i>
            </Link>
            <div className='h-1/2'>
                <img
                    className='w-full h-full object-cover '
                    src="https://i.sstatic.net/gtiI7.gifhttps://media.geeksforgeeks.org/wp-content/uploads/20220218205322/WhatsAppImage20220218at54912PM-304x660.jpeghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-2TmgPpYm-qnN-x36Ulb7Pe9hLatdVvlmQ&s" alt="" />

            </div>
            <div className='h-1/2 p-4'>

                <div className='flex items-center justify-between'>
                    <img className='h-20' src="https://www.svgrepo.com/show/408291/car-white.svg" alt="" />
                    <div className='text-rightk'>
                        <h2 className='text-base  font-semibold '>Pratik </h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1 '>MH 27 AB 0001</h4>
                        <p className='text-sm text-gray-500'>BWM M5 Competation </p>
                    </div>
                </div>
                <div className='flex gap-2 flex-col justify-center items-center'>
                    <div className='w-full'>
                        <div className='flex flex-row p-2 gap-5 border-b-2 border-gray-300 '>
                            <h3 className='h-10 w-15 p-3 w-[20%] r text-xl flex  justify-center items-center '><i className="ri-map-pin-line"></i></h3>
                            <div className='flex flex-col  w-[80%]'>
                                <h3 className='text-base font-semibold'>485/11-1</h3>
                                <p>Gadge Nagar amravati </p>
                            </div>
                        </div>
                        <div className='flex flex-row p-2 gap-5 border-b-2 border-gray-300 '>
                            <h3 className='h-10 w-15 p-3 w-[20%] r text-xl flex  justify-center items-center '><i className="ri-paypal-line"></i></h3>
                            <div className='flex flex-col  w-[80%]'>
                                <h3 className='text-base font-semibold'>₹169.44</h3>
                                <p> Pay For Confirm </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='px-5 py-3 mt-5 bg-green-500 w-full text-white font-semibold  rounded-xl'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding