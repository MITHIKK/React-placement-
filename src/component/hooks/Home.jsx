import React from 'react'
import About from './About'
import image from '../../assets/vettaiyan.jpg'

const Home = ({ items }) => {
  return (
    <div>
      <About items={items}/>
      <img src={image} alt="react" />
    </div>
  )
}

export default Home 