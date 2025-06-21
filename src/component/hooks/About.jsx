import React from 'react'

const About = ({items}) => {
  return (
    <div>
      {items.map((fruit)=>(<li key={fruit}>{fruit}</li>))}
    </div>
    
  )
}

export default About