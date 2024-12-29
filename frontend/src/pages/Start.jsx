import React from 'react'
import { Link, Router } from 'react-router-dom'

const  Start = () => {
  return (
    <div> 
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1692910410341-cf21779ebbe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] w-full flex pt-5  justify-between flex-col h-screen bg-red-400'>
            <img
            className='w-14 ml-5'
             src="https://imgs.search.brave.com/iUu_pSUB4XC14yY3lkGujRPUI3q11j4kizg-ipgasO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2ODc3/OXViZXItbG9nby13/aGl0ZS5wbmc" alt="" />
            <div className='bg-white px-4 py-4'>
                <h1 className='text-3xl font-bold'>Get Started With uber</h1>
                <Link to={'/login'} className='bg-black flex items-center justify-center w-full rounded-md mt-5 text-white py-3'>Continue </Link>
            </div>
        </div>
    </div>
  )
}

export default  Start