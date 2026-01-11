import React from 'react'

const InputTimer = ({handleInput,handleStart}) => {
  return (
   
      <>
        <input 
       
          id="hours"
          onChange={handleInput}
          type="text" placeholder='HH' />
        <input
          id="minutes"
          onChange={handleInput}
          type="text" placeholder='MM'/>
        <input
        id="seconds"
        onChange={handleInput}
         type="text" placeholder='SS'/>
        <button onClick={handleStart}>Start</button>
        
        </>
    
  )
}

export default InputTimer