// 8.Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit. Implement controlled components for both inputs. When the user enters a value in one input, the other input should update with the converted temperature.
import React, { useState } from 'react'

const Temperature = () => {
    const [celcius,setCelcius] = useState();
    const [farenheit,setFarenheit] = useState();

const handleTempChange = (e) =>{
setCelcius(e.target.value)
setFarenheit(celcius*9/5 + 32)
}

const handleTempChangeFor =(e)=>{
    setFarenheit(e.target.value)
setCelcius((farenheit-32)*5/9)
}

  return (
    <div>
      
<label htmlFor="">Temp in ^C</label> <input type="number" value={celcius} onChange={handleTempChange}/>
<label htmlFor="">Temp in ^F</label> <input type="number" value={farenheit} onChange={handleTempChangeFor}/>

    </div>
  )
}

export default Temperature
