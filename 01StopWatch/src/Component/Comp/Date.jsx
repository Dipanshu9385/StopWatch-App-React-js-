import React, { useEffect, useState } from 'react'

const DateTimeComponent = () => {
    const[currentDateTime,setCurrentDateTime]=useState(new Date())

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCurrentDateTime(new Date())
        },1000)

        return ()=>clearInterval(interval)
    },[])
        
   
const formattedDateTime=currentDateTime.toLocaleString();

    return (
        <div>
            <h1 className='mt-20 text-center w-full text-5xl font-semibold text-orange-500'> {formattedDateTime}</h1>
            
        </div>
    )
}

export default DateTimeComponent
