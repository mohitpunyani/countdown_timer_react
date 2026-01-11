import React, { useEffect, useState } from 'react'
import './App.css'
import InputTimer from './InputTimer'
import ShowTimer from './ShowTimer'
function App() {

  const [isStart,setIsStart]=useState(false)
  const [hours,SetHours]=useState(0)
  const [minutes,SetMinutes]=useState(0)
  const [seconds,SetSeconds]=useState(0)
  const [timerId,setTimerId]=useState(0) // this we used when we reset our timer
  const [isPause,setIsPause]=useState(true)
  const handleStart=()=>{
    if(hours<0 || minutes<0 || seconds<=0){
      alert("invalid input")
      return ;
    }
    else{
      setIsStart(true)
    }
  }
  const handlePause=()=>{
    setIsPause(false)
    clearInterval(timerId) // stop the timer
  }
  const handleResume=()=>{
    setIsPause(true)
    // console.log('handle resume ')
    runTimer(hours,minutes,seconds) // continue the timer from where we stop
  }
  const handleReset=()=>{
   setIsStart(false)
   SetHours(0)
   SetMinutes(0)
   SetSeconds(0)
   clearTimeout(timerId)
   return;
  }
  const handleInput=(e)=>
    {
    console.log(e.target.value,e.target.id)
    const value=parseInt(e.target.value)
    const id=e.target.id
    if(id=='hours')
      {
        SetHours(value)
      }
      else if(id=='minutes'){
        SetMinutes(value)
      }
      else{
        SetSeconds(value)
      }
      
      
    }

    // main logic for timer
    const runTimer=(hr,min,sec,tid)=>{
      if(sec>0){
        SetSeconds((sec)=>sec-1)
        
      }
      else if(sec===0 && min>0){
        SetMinutes((min)=>min-1)
        SetSeconds(59)
      }
      else if(min===0 && hr>0){
        SetHours((hr)=>hr-1)
        SetMinutes(59)
        SetSeconds(59)
      }
      if(sec===0 && min===0 && hr===0){
        clearInterval(tid)
        alert('timer is finised')
        handleReset()
        return ;
      }
  }

  useEffect(()=>{
    let tid;
    if(isStart){
      tid=setInterval(()=>{
        runTimer(hours,minutes,seconds,tid)
      },1000)
      setTimerId(tid) 
    }

    // unmount the tid
    return ()=>{
      clearInterval(tid)
    }
  },[isStart,hours,minutes,seconds]) //if any of them change useeffect runs

  return (
    <>
    <div className='App'>
      <h1>Countdown timer</h1>

      {
        !isStart && 
        <InputTimer handleInput={handleInput} 
        handleStart={handleStart}/>
      }
      {isStart && 
        <ShowTimer handlePause={handlePause} 
        handleReset={handleReset}
        handleResume={handleResume}
        hours={hours}
        minutes={minutes}
        isPause={isPause}
        seconds={seconds}
      />
       }
    </div>
    </>
  )
}

export default App