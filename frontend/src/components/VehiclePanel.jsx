import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5
            onClick={() => {
              props.setVehiclePanel(false)
            }}
            className='p-5 h-5 w-10 top-5 flex justify-center items-center  right-8  absolute text-2xl'><i className="ri-arrow-down-wide-line "></i></h5>
          <h3 className='text-2xl mb-3 text-semibold'>Choose a Ride</h3>
          <div onClick={()=>{
            props.setConfirmedRidePanel(true);
            props.setVehiclePanel(false);
          }}  className='flex w-full border-2 mb-2 active:border-black rounded-xl items-center justify-between p-1 gap-2 '>
            <img className='bottom-10 h-15 w-20' src="https://www.svgrepo.com/show/408291/car-white.svg" alt="" />
            <div className='ml-2 w-1/2'>
              <h4 className='text-base font-medium'>UberGo <span><i className="ri-user-fill"></i> 4</span></h4>
              <h5 className='text-sm font-medium'>2 Mins Away</h5>
              <p className='text-xs text-gray-600 font-normal '>Affordable , compact rides</p>
            </div>
            <h2 className='text-xl font-semibold'>₹196.44</h2>
          </div>
          <div onClick={()=>{
            props.setConfirmedRidePanel(true);
            props.setVehiclePanel(false);
          }} className='flex w-full border-2 mb-2 active:border-black rounded-xl items-center justify-between p-1 gap-2 '>
            <img className='bottom-10 h-15 w-20' src="https://imgs.search.brave.com/5YtD_EbRX6gxSUJYM4fhVhg9QfSDsbpDYoJuY_bQQtI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWJlci1hc3NldHMu/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8s/cV9hdXRvOmVjbyxj/X2ZpbGwsaF8zNjgs/d181NTIvdjE2NDky/MzEwOTEvYXNzZXRz/LzJjLzdmYTE5NC1j/OTU0LTQ5YjItOWM2/ZC1hM2I4NjAxMzcw/ZjUvb3JpZ2luYWwv/VWJlcl9Nb3RvX09y/YW5nZV8zMTJ4MjA4/X3BpeGVsc19Nb2Jp/bGUucG5n" alt="" />
            <div className='ml-2 w-1/2'>
              <h4 className='text-base font-medium'>Moto <span><i className="ri-user-fill"></i> 1</span></h4>
              <h5 className='text-sm font-medium'>2 Mins Away</h5>
              <p className='text-xs text-gray-600 font-normal '>Affordable mototr cycel ride, compact rides</p>
            </div>
            <h2 className='text-xl font-semibold'>₹65.44</h2>
          </div>
          <div onClick={()=>{
            props.setConfirmedRidePanel(true);
            props.setVehiclePanel(false);
          }} className='flex w-full border-2 mb-2 active:border-black rounded-xl items-center justify-between p-1 gap-2 '>
            <img className='bottom-10 h-15 w-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div className='ml-2 w-1/2'>
              <h4 className='text-base font-medium'>UberAuto  <span><i className="ri-user-fill"></i> 3</span></h4>
              <h5 className='text-sm font-medium'>4 Mins Away</h5>
              <p className='text-xs text-gray-600 font-normal '>Affordable auto rides</p>
            </div>
            <h2 className='text-xl font-semibold'>₹196.44</h2>
          </div>
    </div>
  )
}

export default VehiclePanel