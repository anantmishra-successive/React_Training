import React from 'react'
import '../Que4/Counter.css'

function Button(props) {
  return (
    <div>
      <button style={{color:props.color}}>{props.text}</button>
    </div>
  )
}

export default Button
