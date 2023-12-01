import React, { useEffect, useState } from 'react'

const Timer = ({initialtime}) => {
    const[timeRemaining,setTimeRemaining]=useState(initialtime);
    const[msg,setMsg]=useState("Timer is running")

    
  useEffect(()=>{
    const interval=setInterval(() => {
      
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining => timeRemaining -1)
      } else {
        clearInterval(interval)
        setMsg("CountDown is Successfully completed")
        
        setTimeout(()=>{
          setMsg("")
        },3000)
      }


    }, 1000);
    return ()=> clearInterval(interval)
  },[timeRemaining])

    const formetTime=(time)=>{
        const hours=Math.floor(time/3600);
        const remainingSecAfterhours=time%3600

        const minutes=Math.floor(remainingSecAfterhours/60);
        const remainingSecAfterminutes=remainingSecAfterhours%60

        const seconds=remainingSecAfterminutes

        return (
          `${hours<9?"0":""}${hours}:${minutes<9?"0":""}${minutes}:${seconds<10?"0":""}${seconds}`
        )
        // `${hours<9?"0":""}${hours}:${minutes<9?"0":null}${minutes}:${seconds<9?"0":null}${seconds}`
        // return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
    }
  return (
    <div>
      <p className='text-5xl font-bold'>{formetTime(timeRemaining)}</p>
      <p className='mt-4 text-yellow-800 font-mono font-semibold'>{msg}</p>
      
    </div>
  )
}

export default Timer
