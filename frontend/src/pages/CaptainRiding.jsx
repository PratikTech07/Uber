import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRiding from '../components/FinishRiding'


const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePaleRef = useRef(null)

    useGSAP(() => {
        if (finishRidePanel) {
            gsap.to(finishRidePaleRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePaleRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [finishRidePanel])

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
            <div className='h-4/5'>
                <img
                    className='w-full h-full object-cover '
                    src="https://i.sstatic.net/gtiI7.gifhttps://media.geeksforgeeks.org/wp-content/uploads/20220218205322/WhatsAppImage20220218at54912PM-304x660.jpeghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-2TmgPpYm-qnN-x36Ulb7Pe9hLatdVvlmQ&s" alt="" />

            </div>
            <div className='h-1/5 bg-yellow-400 flex relative justify-between items-center  p-7 gap-3'
                onClick={()=>{
                    setFinishRidePanel(true)
                }}
            >
                <h5
                    onClick={() => {

                    }}
                    className=' w-screen top-0  flex justify-center right-0 items-center  absolute text-2xl'><i class="ri-arrow-up-wide-line"></i></h5>
                <h4 className='text-xl font-bold'>4 km Away</h4>
                <button className='px-10 py-3 bg-green-500 mt-6 mb-8 text-white font-semibold  rounded-xl'>Complete Ride</button>
            </div>
            <div ref={finishRidePaleRef} className='fixed w-full z-10 px-3 py-6  translate-y-full bottom-0  bg-white'>
                <FinishRiding setFinishRidePanel={setFinishRidePanel} />
            </div>

        </div>
    )
}

export default CaptainRiding