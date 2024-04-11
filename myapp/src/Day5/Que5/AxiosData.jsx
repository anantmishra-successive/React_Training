//5.Create a React component that fetches data from a public API (e.g., JSONPlaceholder) using Axios and displays it on the page.



import React, { useEffect, useState } from 'react'
import axios from 'axios';
import  '../Que1/style.css'

const AxiosData = () => {

const [data,setData] = useState([]);

const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => setData(res.data))
    .catch((error) => {console.log(error)})
}
useEffect(()=>{
    getData();
},[])

console.log(data)
  return (
    <div className='box'>
        {
            data.slice(0,20).map(data =>{
                return (
                   <div className='info' key={data.id}>
                    <b>{data.title}</b>
                <p>{data.body}</p>
                     </div> 
                )
            })
        }
      
    </div>
  )
}

export default  AxiosData
