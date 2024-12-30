import React from 'react'

const LocationSearchPanel = (props) => {

    
    const location = [
        "HO. NO 46, Near temple and jadu tona gallli ",
        "123 Main Street, Downtown Area",
        "456 Park Avenue, Business District",
        "789 Ocean Drive, Beachfront",
        "321 Forest Lane, Green Valley",
    ]


    return (
        <div>
            {/* this is demo data */}

            {
                location && location.map((elem, idx) => {
                    return (
                        <div key={idx}
                        onClick={()=>{
                            props.setVehiclePanel(true);
                            props.setPanelOpen(false);
                        }}
                        className='flex active:border-black  border-2 rounded-xl p-2 items-center my-2 justify-start gap-5'>
                            <h3 className='bg-[#eee] h-10 w-10 rounded-full flex justify-center items-center'><i className="ri-map-pin-fill"></i></h3>
                            <h1 className='font-medium'> {elem} </h1>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default LocationSearchPanel