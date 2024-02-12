import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const handleClick = () => {
    auth.logout()
    navigate('/')
  }
  return (
    <div>
      Wellcome {auth.user}
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}
