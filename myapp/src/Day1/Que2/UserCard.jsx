// 2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
// Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
// Create multiple instances of the UserCard component with different user data.


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
