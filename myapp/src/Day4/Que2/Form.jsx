// 2.Build a form that includes various input fields like text inputs, checkboxes, and radio buttons. Ensure that each input is a controlled component. When the user submits the form, log the form data to the console


import React,{useState} from 'react'

const Form = () => {
    const [name,setName] = useState()
    const [mail,setMail] = useState()
    const [checkbox1,setCheckbox1] = useState()
    const [radio1,setRadio1] = useState(false)

   const handleSubmit = ()=>{
console.log(name,mail,checkbox1,radio1)
   }

  return (
    <div>
    <label htmlFor="name">Name</label>
    <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
<br/>
    <label htmlFor="email">Email</label>
    <input type="email" value={mail} onChange={(e)=>setMail(e.target.value)} />
<br/>
   
    <input type="checkbox"  value="BikeNotselected" onChange={(e)=>{setCheckbox1("bike")}} />   <label htmlFor="checkboc">Bike</label>
    
<br/>

    <input type="radio" value={false} onChange={(e)=>setRadio1(true)} />  <label htmlFor="radio">Radio</label>
<br/>
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Form
