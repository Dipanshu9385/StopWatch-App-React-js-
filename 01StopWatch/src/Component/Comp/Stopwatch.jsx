import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFlag, faPauseCircle, faPlayCircle, faRotateRight} from '@fortawesome/free-solid-svg-icons'

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const[lapTimes,setLapTimes]=useState([])
  
  // const[lapStartTime,setLapStartTime]=useState(0)

  useEffect(()=>{
    let timer;
    if (isRunning) {
      timer=setInterval(()=>{
        setTime((prev)=>prev+1)
      },1000)
    }
    return ()=> clearInterval(timer)
  },[isRunning])

  const handlestart=()=>{
    setIsRunning(true)
    // setLapStartTime()
  }
  const handlestop=()=>{
    setIsRunning(false)
  }
  const handlereset=()=>{
    setTime(0)
    setIsRunning(false)
    setLapTimes([])
  }

  const formetTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)           //1. hours Calculating
    const remainingSecAfterhours = seconds % 3600

    const minutes = Math.floor(remainingSecAfterhours / 60)                //2.minutes Calculating
    const remainingSecAfterminutes = remainingSecAfterhours % 60
    
    const second = remainingSecAfterminutes            //3. second Calculating

    return (
      `${hours<10?"0":""}${hours}:${minutes<10?"0":""}${minutes}:${second<10?"0":""}${second}`
    )

  }

  const handleLap=()=>{
      setLapTimes([...lapTimes,time])
      // setLapStartTime(0)

  }
  return (
    <div className='  p-4 flex flex-col justify-center items-center gap-10 mt-10  w-full ' >
      {/* <h1 className='text-red-700 font-semibold text-3xl transition hover:text-red-900  duration-200'>StopWatch</h1> */}
      <div className=' bg-blue-100 h-60 w-60 rounded-full border-4 border-blue-50 flex justify-center items-center shadow-lg  shadow-slate-700'>
      
      <p className='text-5xl font-bold'>{formetTime(time)}</p>
      </div>
      <div className='flex items-center gap-8'>
        {/* <button className=' bg-black text-white px-3 py-1 rounded-full' onClick={handlereset}>Reset</button> */}
       <FontAwesomeIcon onClick={handlereset} icon={faRotateRight} disabled={true}
       style={{color:"0000",fontSize:"33px"}}
       
       />
        <FontAwesomeIcon onClick={isRunning?handlestop:handlestart} icon={isRunning?faPauseCircle:faPlayCircle} style={{color: "#1f60d1",fontSize:"44px"}} />
       <FontAwesomeIcon onClick={handleLap} icon={faFlag} style={{color:"00000",fontSize:"33px"}}/>
        
        
        
        {/* <button className=' bg-black text-white px-3 py-1 rounded-full' onClick={handleLap}>Lap</button> */}
      </div>
      <div>
        <h2>Lap Times :</h2>
        <ul>
        {lapTimes && lapTimes.map((laptime,index)=>(
          <li key={index}>
            {index+1}, laptime: ,total : {formetTime(laptime)}
          </li>
        ))
        }
        </ul>

      </div>
    </div>
  )
}

export default Stopwatch
    

   

   

