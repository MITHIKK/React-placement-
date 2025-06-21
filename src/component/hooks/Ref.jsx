import React, { useRef,useState, useEffect } from 'react'

const Ref = () => {
    const [count, setCount] = useState(0);
    const value =useRef(0);

    
    useEffect(()=> {
        setTimeout(()=>{
            value.current = value.current + 1
        },200)
        
    })

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>button</button>
        <h1>{value.current}</h1>
    </div>
  )
}

export default Ref