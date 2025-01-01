import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePanel from '../components/ConfirmRidePanel'


const CaptainHome = () => {
  const [ridePopUPPanel, setRidePopUPPanel] = useState(true);
  const ridePanelRef = useRef(null);

  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false);
  const confirmRidePopUpPanelRef = useRef(null)

  useGSAP(()=>{
    if(ridePopUPPanel){
      gsap.to(ridePanelRef.current, {
        transform: 'translateY(0)'
     })
   }else{
     gsap.to(ridePanelRef.current, {
        transform: 'translateY(100%)'
     })  
   }
  }, [ridePopUPPanel]);

  useGSAP(()=>{
    if(confirmedRidePanel){
      gsap.to(confirmRidePopUpPanelRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePopUpPanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[confirmedRidePanel])

  return (
    <div className='h-screen'>
      <div>
        <img
          className='w-16 absolute left-5 top-5'
          src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />

        <Link to='/home' className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full right-2 top-3 '>
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img
          className='w-full h-full object-cover '
          src="https://i.sstatic.net/gtiI7.gifhttps://media.geeksforgeeks.org/wp-content/uploads/20220218205322/WhatsAppImage20220218at54912PM-304x660.jpeghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-2TmgPpYm-qnN-x36Ulb7Pe9hLatdVvlmQ&s" alt="" />

      </div>
      <div className='h-2/5   p-4 gap-5'>
        <CaptainDetails />
      </div>
      <div ref={ridePanelRef}  className='fixed w-full z-10 px-3 py-6  translate-y-full bottom-0  bg-white'>
        <RidePopUp setRidePopUPPanel={setRidePopUPPanel} setConfirmedRidePanel={setConfirmedRidePanel} />
      </div>
      <div ref={confirmRidePopUpPanelRef}  className='fixed h-screen w-full z-10 px-3 py-6  translate-y-full bottom-0  bg-white'>
        <ConfirmRidePanel setRidePopUPPanel={setRidePopUPPanel} setConfirmedRidePanel={setConfirmedRidePanel} />
      </div>
    </div>
  )
}

export default CaptainHome