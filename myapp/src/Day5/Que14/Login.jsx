import React, { useState } from 'react'

const Login = () => {

const [name,setName] = useState("")
const [password,setPassword] = useState("")

const handleLogin = () => {
    if(name==="Anant" && password==="1234"){localStorage.setItem("login","true")


    }

}

  return (
    <div>
    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
    <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
