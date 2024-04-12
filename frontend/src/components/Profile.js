import React, { useState } from 'react'

function Profile() {
   const user=JSON.parse(localStorage.getItem("user"))
   console.log(user)

  return (
    <div className='mt-5 text-start container'>
     <h2><i class="fa-solid fa-user text-primary me-4"></i> : {user.name}</h2>
     <h2 className='mt-4'><i class="fa-solid fa-envelope me-4 text-primary"></i>: {user.email}</h2>
     <h2 className='mt-4'><i class="fa-solid fa-location-dot me-4 text-primary"></i>: {user.address}</h2>
    </div>
  )
}

export default Profile
