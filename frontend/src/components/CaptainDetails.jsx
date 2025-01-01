import React from 'react'

const CaptainDetails = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex items-center bg-gray-200 rounded-xl justify-between p-5'>
                <div className='flex items-center justify-between gap-5 '>
                    <img className='h-16 rounded-full bg-cover' src="https://imgs.search.brave.com/rHEoKt1HvbwBOiSdaCYiYVCUtCk_dWz47h_2s374Ups/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlzdGNoYWxsZW5n/ZXMuY29tL2YvaXRl/bXMvMGYzMmFjNjIt/ZWFlNC00MmE0LWJm/MzAtMzZmYTNhNmVi/NzI4LmpwZw" alt="" />
                    <h4 className='text-lg font-medium'>Harshal Patel</h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>209.90</h4>
                    <p className='text-sm text-gray-600'>Earned</p>
                </div>
            </div>
            <div className='flex p-3 bg-gray-200 rounded-2xl justify-between items-start'>
                <div className='text-center '>
                    <i className="text-2xl mb-3 font-extralight   ri-timer-2-line"></i>
                    <h3 className='text-lg font-medium'>10</h3>
                    <p className='text-sm text-gray-600 '>Hours Online</p>
                </div>
                <div className='text-center '>
                    <i className="text-2xl mb-3 font-extralight   ri-speed-up-line"></i>
                    <h3 className='text-lg font-medium'>10</h3>
                    <p className='text-sm text-gray-600 '>Hours Online</p>
                </div>
                <div className='text-center '>
                    <i className="text-2xl mb-3 font-extralight   ri-booklet-line"></i>
                    <h3 className='text-lg font-medium'>10</h3>
                    <p className='text-sm text-gray-600 '>Hours Online</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails