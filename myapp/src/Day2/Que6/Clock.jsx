// 6.Create a functional component called Clock.
// Use the useState hook to manage a state variable named time initialized to the current time.
// Use the useEffect hook to update the time state every second to display the current time.
// Render the current time in a <p> element.
// When the component unmounts, clear the interval to stop updating the time.

import React,{useState,useEffect} from 'react'

const Clock = () => {
    const [date,setDate] = useState(new Date());
const [time,setTime] = useState(`${date.getHours()} : ${date.getMinutes()} :  ${date.getSeconds()}`)

useEffect(()=>{

  const interval=  setTimeout(()=>{
        setDate(new Date());
        setTime(`${date.getHours()} : ${date.getMinutes()} :  ${date.getSeconds()}`)
    },1000)
    return ()=>{
        clearInterval(interval)
    }
},[time,date])

  return (
    <div>
      {time}
    </div>
  )
}

export default Clock
