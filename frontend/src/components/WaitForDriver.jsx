import React from 'react'

const WaitForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.watingDriverPanel(false)
        }}
        className='p-2 text-center w-[93%] top-0 mb-2 absolute text-2xl'><i className="ri-arrow-down-wide-line "></i></h5>
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
      </div>
    </div>
  )
}

export default WaitForDriver