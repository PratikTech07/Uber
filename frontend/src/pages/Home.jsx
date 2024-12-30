import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmedVehicle from '../components/ConfirmedVehicle'
import LookingForDriver from '../components/LookingForDriver'
import WaitForDriver from '../components/WaitForDriver'

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('')

  const [panelOpen, setPanelOpen] = useState(false)
  const panelCloseRef = useRef(null)

  const [vehiclePanel, setVehiclePanel] = useState(false)
  const vehiclePanelRef = useRef(null)

  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false)
  const ConfirmedRidePanelRef = useRef(null)

  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null)

  const [watingDriverPanel, setWatingDriverPanel] = useState(false)
  const watingForDriverRef = useRef(null)

  const panelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        display: 'block'
      }),
        gsap.to(panelCloseRef.current, {
          opacity: 1
        })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        display: 'none'
      }),
        gsap.to(panelCloseRef.current, {
          opacity: 0
        })
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel])

  useGSAP(() => {
    if (confirmedRidePanel) {
      gsap.to(ConfirmedRidePanelRef
        .current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ConfirmedRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmedRidePanel])

  useGSAP(()=>{
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(()=>{
    if(watingDriverPanel){
      gsap.to(watingForDriverRef.current, {
         transform: 'translateY(0)'
      })
    }else{
      gsap.to(watingForDriverRef.current, {
         transform: 'translateY(100%)'
      })  
    }
  }, [watingDriverPanel])

  return (
    <div className='h-screen relative'>
      <img
        className='w-16 absolute left-5 top-5'
        src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />
      <div
        onClick={() => {
          setVehiclePanel(false)
        }}
      >
        {/* img for backgorud */}
        <img
          className='w-full h-full object-cover '
          src="https://i.sstatic.net/gtiI7.gifhttps://media.geeksforgeeks.org/wp-content/uploads/20220218205322/WhatsAppImage20220218at54912PM-304x660.jpeghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-2TmgPpYm-qnN-x36Ulb7Pe9hLatdVvlmQ&s" alt="" />
      </div>
      <div className=' flex flex-col justify-end absolute h-screen top-0 '>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false)
            }}
            className='absolute opacity-0 top-2 right-3 p-1 text-2xl '>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h1 className='text-xl   font-semibold mb-2'>Find trip</h1>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 left-10 w-1 top-[41%] rounded-full bg-black">

            </div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className='w-full px-10 py-3 mb-5 text-base rounded-lg bg-[#eee]' type="text" placeholder='Add a Pickup Location' />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => { setDestination(e.target.value) }}
              className='w-full px-10 py-3 text-base rounded-lg bg-[#eee]' type="text " placeholder='Enter your Destination' />
          </form>
        </div>
        <div ref={panelRef} className='h-[70%]  bg-white hidden'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 px-3 py-6 bottom-0 translate-y-full bg-white'>
        <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>
      <div ref={ConfirmedRidePanelRef} className='fixed w-full z-10 px-3 py-6 bottom-0 translate-y-full bg-white'>
            <ConfirmedVehicle setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className='fixed w-full z-10 px-3 py-6 bottom-0 translate-y-full bg-white'>
             <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div ref={watingForDriverRef} className='fixed w-full z-10 px-3 py-6 bottom-0  bg-white'>
             <WaitForDriver watingDriverPanel={watingDriverPanel } />
      </div>

    </div>
  )
}

export default Home