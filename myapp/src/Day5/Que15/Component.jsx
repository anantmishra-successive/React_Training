import React from 'react'
import WithLogger from './WithLogger'

const Component = (props) => {
  return (
    <div>
     {props.count}
     <button onClick={()=>{props.setCount(props.count + 1)}}>Click</button>
    </div>
  )
}

export default WithLogger(Component)