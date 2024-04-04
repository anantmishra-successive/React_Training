import React from 'react'
import { useState } from 'react'
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h3><p>{count}</p></h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            
        </div>
  
    )
}

export default Counter
