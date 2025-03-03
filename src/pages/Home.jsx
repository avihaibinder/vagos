import React from 'react'
import { useNavigate } from 'react-router-dom'
import RespirationBall from '../components/RespirationBall'

function Home() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <div className="home-container">
      <div className="user-info">
        <h2>Welcome, {user.name}!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <RespirationBall />
    </div>
  )
}

export default Home