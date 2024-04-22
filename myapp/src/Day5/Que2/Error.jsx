// 2.Implement error handling for the fetch request. Display an error message if the request fails and provide a way for the user to retry the request.

import React, { useState, useEffect } from "react";

import "../Que1/style.css";

const Error = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [api,setApi] = useState('https://jsonpladceholder.typicode.com/posts')
  const getData = () => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
       
        
        setData(data)})
      .catch((error) => {
        console.log(error)
        setError(true);
      });
  };
  useEffect(() => {
    getData();
  }, [api]);
 

const handleSolve=()=>{
    setApi('https://jsonplaceholder.typicode.com/posts')
    setError(false)
}

  return (
    <div className="box">
      {error ? (
       <div>
         <h3> Error due to Wrong Url </h3>
        <button onClick={handleSolve} >  Solve </button>
       </div>
       
      ) : (
        data?.map((data) => {
          return (
            <div className="info" key={data.id}>
              <b>{data.title}</b>
              <p>{data.body}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Error;
