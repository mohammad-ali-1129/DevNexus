
import React, {useState} from 'react'
import ComponentX from './ComponentX'
export const snameContext = React.createContext()
export const marksContext = React.createContext()
const ProviderComponent = () => {
    const [sname, setSname] = useState("Harsh")
    const [marks, setMarks] = useState("80")
  return (
    <div>
      <snameContext.Provider value = {sname}>
        <marksContext.Provider value = {marks}>
            <ComponentX/>
        </marksContext.Provider>
      </snameContext.Provider>
    </div>
  )
}

export default ProviderComponent
