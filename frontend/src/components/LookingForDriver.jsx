import React from 'react'

const LookingForDriver = () => {
  return (
    <div>
         <h5
                onClick={() => {
                    props.setVehicleFound(false)
                }}
                className='p-5 h-5 w-10 top-5 flex justify-center items-center  right-8  absolute text-2xl'><i className="ri-arrow-down-wide-line "></i></h5>
            <h3 className='text-2xl mb-3 text-semibold'>Looking For a Driver</h3>
            <div className='flex gap-2 flex-col justify-center items-center'>
                <img className='h-40' src="https://www.svgrepo.com/show/408291/car-white.svg" alt="" />
                <div className='w-full'>
                    <div className='flex flex-row p-2 gap-5 border-b-2 border-gray-300 '>
                        <h3 className='h-10 w-15 p-3 w-[20%] r text-xl flex  justify-center items-center '><i  className="ri-map-pin-fill"></i></h3>
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
            </div>
    </div>
  )
}

export default LookingForDriver