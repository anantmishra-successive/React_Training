import React from 'react'
import WithDataFetching from './WithDataFetching'

const Component = (props) => {
  return (
    <div>
        {console.log(props.data)}
      <h3>Api Data</h3>
      {
        
        props.data.slice(0,10).map((item, index) => {
          return (
            <div key={index}>
                <p>{item.id}</p>
              <p>title: {item.title}</p>
              <p>body: {item.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default WithDataFetching(Component)