import React,{useState} from 'react'
import useLocalStorage from './useLocalStorage'

const Storage = () => {
    const [value, setValue,removeItem,getItem] = useLocalStorage('Hello World', 'useLocalStorage')
    const [data,setData] =useState("")
// const v = getItem()
// console.log(typeof(v));
// console.log(v)
// JSON.parse(v)
// console.log(v)
    return (
        <div>
           
            <h1>{value}</h1>
            <label htmlFor="value">Change Value</label>
            <input type="text" onChange={(e)=> setData(e.target.value)} />
            
            <button onClick={() => setValue(data)}>Set Value</button>
            <button onClick={() => removeItem(data)}>Delete Value</button>
            
            
        </div>
    )
  
}

export default Storage