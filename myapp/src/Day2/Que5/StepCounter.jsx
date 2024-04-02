// 5.Create a functional component called CounterWithStep.
// Use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// Add an input field where the user can specify a step value.
// Update the count using the specified step value when the buttons are clicked.



import React,{useState} from 'react'

function StepCounter() {
 const [count,setCount] = useState(0)
 const [step,setStep] = useState(1)
 console.log(typeof(count),"aaa",typeof(step))
  return (
    <div>
        <p>{count}</p>
        <input type="number" value={step} onChange={(e)=>{setStep(e.target.value)}} />
         <button onClick={()=>{setCount(count+Number(step))}}>Increament</button>
         <button onClick={()=>{setCount(count-Number(step))}}>Decreament</button>
    </div>
  )
}

export default StepCounter
