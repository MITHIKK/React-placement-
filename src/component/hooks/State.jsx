import React, { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(0);
    const handleincrement = () => {
        setCount(count + 1);
    }
    const handledecrement = () => {
        setCount(count - 1);
    }
    const handleReset = () => {
        setCount(0);
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleincrement}>Increment</button>
      <button onClick={handledecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default State