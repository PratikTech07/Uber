import React from 'react'
import { Link } from 'react-router-dom'

const FinishRiding = (props) => {



    return (
        <div >
            <h5
                onClick={() => {
                    props.setFinishRidePanel(false)
                }}
                className='p-5 h-5 w-10 top-5 flex justify-center items-center  right-8  absolute text-2xl'><i className="ri-arrow-down-wide-line "></i></h5>
            <h3 className='text-2xl mb-3 text-semibold'>Finish this ride </h3>
            <div className='flex items-center justify-between border-2 border-yellow-300 rounded-xl p-3'>
                <div className='flex items-center gap-3'>
                    <img className='h-14 object-cover w-14 rounded-full' src="https://imgs.search.brave.com/qzMHOfHSM54lSYRfJVN2Sxr_vGei9-gmfPGdvFG_gls/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzMzLzc4LzQz/LzM2MF9GXzkzMzc4/NDMxOF9qWjNVdXdo/YkJlNDBId0NlV0NW/M0tNc1pQY1NObHpr/by5qcGc" alt="" />
                    <h4 className='text-xl'>Pratik Bharskar </h4>
                </div>
                <h5 className='text-2xl font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex gap-2 flex-col justify-center items-center'>
                <div className='w-full'>
                    <div className='flex flex-row p-2 gap-5 border-b-2 border-gray-300 '>
                        <h3 className='h-10 w-15 p-3 w-[20%] r text-xl flex  justify-center items-center '><i className="ri-map-pin-fill"></i></h3>
                        <div className='flex flex-col  w-[80%]'>
                            <h3 className='text-base font-semibold'>562/11-1</h3>
                            <p>Chatritalab amravati </p>
                        </div>
                    </div>
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

               

                    <div className=' mt-7  w-full'>
                        <Link
                            to='/captain-riding'
                            onClick={() => {
                                props.setRidePopUPPanel(false)
                            }}
                            className='px-5 py-3 flex justify-center bg-green-500 w-full text-white font-semibold  rounded-xl'>Finish Ride </Link>
                            <p className='mt-10 text-xsm'>Click on Finish ride button i you have complited the payment</p>

                    </div>


            </div>
        </div>
    )
}

export default FinishRiding