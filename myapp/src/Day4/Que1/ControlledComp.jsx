// 1.Create a React component with an input field. Implement it as a controlled component where the input value is controlled by the component's state. When the user types into the input field, the component's state should update accordingly.

import React, { useState } from 'react'

const ControlledComp = () => {
    const [value,setValue]= useState("")
  return (
    <div>
        {value}
        <br />
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
    </div>
  )
}

export default ControlledComp
