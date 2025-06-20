import React from 'react'

const Home = ({ items }) => {
  return (
    <div>
      {items.map((fruit)=>(<li key={fruit}>{fruit}</li>))}
      <h1>home</h1>
    </div>
  )
}

export default Home 