// 1.Create a React component that fetches data from a public API (e.g., JSONPlaceholder) and displays it on the page. Use the fetch function to make the request.


import React, { useEffect, useState } from 'react'
import  './style.css'

const FetchData = () => {

const [data,setData] = useState([]);

const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => {console.log(error)})
}
useEffect(()=>{
    getData();
},[])

console.log(data)
  return (
    <div className='box'>
        {
            data.slice(0,40).map(data =>{
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

export default FetchData
