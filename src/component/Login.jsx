import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useLocation, useNavigate } from 'react-router-dom'

export const Login = () => {
  const [user, setUser] = useState('')
  const auth = useAuth()
  const location = useLocation()
  const redirectPath = location.state?.path || '/'
  const navigate = useNavigate()
  const handleClick = () => {
    auth.login(user)
    navigate(redirectPath, {replace: true})
  }
  return (
    <div>
          <label>UserName: </label>
          <input type="text" onChange={(e) => setUser(e.target.value)} />
          <button onClick={handleClick}>Login</button>
    </div>
  )
}
