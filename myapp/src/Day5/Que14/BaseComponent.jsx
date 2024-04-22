import React from 'react'
import WithAuth from './WithAuth'

const BaseComponent = () => {
  return (
    <div>
     <h2>Protected Componennt Rendered</h2>
    </div>
  )
}

export default WithAuth(BaseComponent)
