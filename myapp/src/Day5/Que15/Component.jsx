import React from 'react'
import WithLogger from './WithLogger'

const Component = () => {
  return (
    <div>
      This is a component
    </div>
  )
}

export default WithLogger(Component)