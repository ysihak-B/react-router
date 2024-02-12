import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <>
    <div>
        Home Page
    </div>
    <button style={{cursor: 'pointer'}} onClick={() => navigate('order-summary')}>Place Order</button>
    </>
  )
}

export default Home