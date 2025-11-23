
import React, {useEffect, useState} from 'react'

const UseEffectExample = () => {
    const [count,setCount] = useState(0);

    const incre = () => {
        setCount(prev => prev+1)
    }

    useEffect(()=>{
        console.log("Count has been updated to: ", count);
    },[count])
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={incre}>Increment</button>
    </div>
  )
}

export default UseEffectExample








