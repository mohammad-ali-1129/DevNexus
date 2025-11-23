import React from 'react'

const Event = () => {
    const handleEvent = () => {
        alert("OK")
    }
  return (
    <div>
      <h1>This is event handling function component </h1>
      <button onClick={handleEvent}>Click here </button>
    </div>
  )
}

export default Event
