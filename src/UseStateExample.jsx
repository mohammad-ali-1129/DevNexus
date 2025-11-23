import React, { useState } from 'react'

const UseStateExample = () => {
    const [count, setCount] = useState(0);
    
    const incre = () => {
        setCount((prevCount) => {
            return prevCount + 1;
        })
    }

    const decre = () => {
        setCount(prevCount => prevCount - 1)
    }
    
  return (
    <div>
      <h2>Count: {count} </h2>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>decrement</button>
    </div>
  )
}

export default UseStateExample
