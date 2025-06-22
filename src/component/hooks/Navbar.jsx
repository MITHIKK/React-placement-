import React from 'react'
import './Navbar.css' // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <Link to='/' className='Link'>Home</Link>
            <Link to='/about' className='Link'>About</Link>
            <Link to='/contact' className='Link'>Contact</Link> 
            <Link to='/counter' className='Link'>Counter</Link>
            <Link to='/hooks' className='Link'>Hooks</Link>
            <Link to='/state' className='Link'>useState</Link>
            <Link to='/effect' className='Link'>useEffect</Link>
            <Link to='/login' className='Link'>Login</Link>
            <Link to='/ref' className='Link'>useRef</Link>
            <Link to='/reducer' className='Link'>useReducer</Link> 
            
        </nav>
    </div>
  )
}

export default Navbar