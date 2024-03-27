import React from 'react'
import './UserCard.css'
function UserCard(props) {
  return (
    <div className='user'>
      <div>
        <img src={props.avatarURL} alt={props.name} />
        <h3>{props.name}</h3>
        <h4>{props.email}</h4>
      </div>
    </div>
  )
}

export default UserCard
