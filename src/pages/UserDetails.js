import React, { useEffect } from 'react'
import './UserDetails.css'

function UserDetails(props) {

  let id = props.id;
  
  useEffect(() => {
    fetch("localhost:8080/admin/users/" + id)
  });

  return (
    <div>
      <p></p>
        <img className='user-img'></img>
        <div>AMIN OMER</div>
        <p>active : No</p>
        <p>Complate Order: 1900</p>
        <p>Uncomplate Order: 1900</p>
        <p>All Sent Order: 1900</p>
        <p>Accepted Order: 1900</p>
        <p>Unaccepted Order: 1900</p>
        <a>Delete</a>
        <a>Edit</a>
        <a>Block</a>
        <a>Action</a>
    </div>
  )
}

export default UserDetails