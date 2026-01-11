import React from 'react'

const ShowTimer = (props) => {

    const {handlePause,
        handleReset,
        handleResume,
        minutes,
        hours,
        isPause,
        seconds}=props
  return (
    <>
    <div>{hours <10 ? `0${hours}` : hours}</div>
        <span>:</span>
        <div>{minutes <10 ? `0${minutes}`: minutes}</div>
        <span>:</span>
        <div>{seconds <10 ? `0${seconds}`: seconds}</div>
       
        {isPause && 

        <button onClick={handlePause}>pause</button>
        }

        {!isPause && 
        <button onClick={handleResume}>Resume</button>
         }

        <button onClick={handleReset}>reset</button>
    </>
  )
}

export default ShowTimer