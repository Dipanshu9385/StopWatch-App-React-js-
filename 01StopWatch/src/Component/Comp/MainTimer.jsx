import React, { useEffect, useState } from 'react'
import Timer from './Timer'

const MainTimer = () => {
   const[inputHours,setInputHours]=useState(0)
   const[inputMinutes,setInputMinutes]=useState(0)
   const[inputSeconds,setInputSeconds]=useState(0)
   const[remaningSec,setRemaningSec]=useState(null)
//    const[countdownTime,setCountdownTime]=useState(null)
   
   const handleHoursChange=(e)=>{
       setInputHours(()=>parseInt(e.target.value))
    }
    const handleMinutesChange=(e)=>{
        setInputMinutes(()=>parseInt(e.target.value))
    }
    const handleSecondsChange=(e)=>{
        setInputSeconds(()=>parseInt(e.target.value))
    }
    
    
    
    const startCountdown=()=>{
       let totalSeconds=inputHours*3600 + inputMinutes*60 + inputSeconds;
    console.log(totalSeconds)
    if (totalSeconds>0) {
       setRemaningSec(totalSeconds)
    
    } else{
        alert("Please Enter a  Positive value");
    }
   }




  return (
    <div className='flex justify-center mt-28'>
        <div className='w-2/5 bg-green-300 p-10 rounded-md'>
        <div className='flex gap-4'>
            
            <label>
                Enter countdown duration :
                <input type="number"  min={0} max={23} onChange={handleHoursChange} value={inputHours} placeholder='hours'/>
                <span>:</span>
                <input type="number" min={0} max={59} value={inputMinutes} onChange={handleMinutesChange} placeholder='minutes'/>
                <span>:</span>
                <input type="number" min={0} max={59} value={inputSeconds} onChange={handleSecondsChange} placeholder='seconds'/>
                
            </label>
            <button className='bg-slate-900 py-1 px-4 text-white rounded-full' onClick={startCountdown}> start</button>
            
        </div>
        <div className='mt-10 text-center'>
        {
          remaningSec !==null &&   <Timer initialtime={remaningSec} />
        }
        </div>
        </div>
       
      
    </div>
  )
}

export default MainTimer
