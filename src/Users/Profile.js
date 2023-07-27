import React from 'react'

const Profile = () => {
  const logout = () => {
    sessionStorage.removeItem('token')
    window.location.href = '/';
    console.log('ok')
  }
  return (
    <a href='#' onClick={()=>logout()} style={{color:'white'}}>Logout</a>
  )
}

export default Profile