import React ,{useContext}from 'react'
import { Biodata } from './Parent'

const Child = () => {
    const {loggedIn,onLogin} = useContext(Biodata)
  return (
    <div>
        {
            loggedIn?<h1>Welcome Anant</h1>:<h1>Please Login</h1>
        }
        {
         !loggedIn && <button onClick={onLogin}  >Login</button>   
        }
        {
          
            loggedIn && <button onClick={onLogin}  >SignOut</button>   
           
        }
      
    </div>
  )
}

export default Child
