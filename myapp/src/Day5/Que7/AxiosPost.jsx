import React, { useState } from 'react'
import axios from 'axios'
const AxiosPost = () => {


  const [data,setData] = useState({})
   const [userId,setUserId] = useState()
   const [title,setTitle] = useState()
   const [body,setBody] = useState()


   const handleSubmit = () =>{
   
    axios.post('https://jsonplaceholder.typicode.com/posts', {userId,title,body} )
  .then(function (response) {
    console.log("POST request successfull!");
    console.log(response.data);
  })
  .catch(function (error) {
    console.error("POST request failed:", error);
  });
   }




  return (
    <div>

            <label htmlFor="id"  >UserId</label>
            <input type="text" value={userId} onChange={(e)=>setUserId(e.target.value)} />

            <label htmlFor="title">Title</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />


            <label htmlFor="body">Body</label>
            <input type="text"  value={body} onChange={(e)=>setBody(e.target.value)} />
     
             <button onClick={handleSubmit}>Post</button>
      
             
    </div>
  )
}

export default AxiosPost
