// 4.Build a registration form with two password fields. Implement controlled components for both password inputs. Add a validation rule to ensure that the two passwords match before allowing the form submission.




import React, { useState } from 'react'

const Validation = () => {
    const [password,setPassword] = useState();

    const [confirm,setConfirm] = useState();
    const handleClick = () => {
        if(password!==confirm){
            alert("your passwords are not matched")
        }
        else{
            alert("your passwords are matched form submitted")
        }
    }
  return (
    <div>
      <label htmlFor="">Password</label>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />  <br />
      <label htmlFor="">Confirm Password</label>
      <input type="password" value={confirm} onChange={(e)=>setConfirm(e.target.value)}/>


      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Validation
