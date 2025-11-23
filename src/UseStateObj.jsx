import React, {useState} from 'react'

const UseStateObj = () => {
    const [led, setLed] = useState({
        color: "red",
        price: "100",
        watt: "9"
    })

    const changeProperty = () => {
        setLed((preState) => {
            return ({
                ...preState, color : "Silver"
            })
        })
    }
  return (
    <div>
      <h2>The color of led is : {led.color} and price is {led.price} and watt is {led.watt}</h2>
      <button onClick={changeProperty}>Change color</button>
    </div>
  )
}

export default UseStateObj
