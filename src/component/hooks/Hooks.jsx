import React from 'react'
import { Link } from 'react-router-dom'

const Hooks = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"}}>
        <Link to='/state'>useState</Link>
        <Link to='/effect'>useEffect</Link>
    </div>
  )
}

export default Hooks