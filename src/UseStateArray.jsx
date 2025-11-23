import React, {useState} from 'react'

const UseStateArray= () => {
    const [subject, setSubjects] = useState(["Java","C++","Python"])

    const changeProperty = () => {
        setSubjects((preState) => {
            return ([...preState,"React.js"])
        })
    }
  return (
    <div>
      <h2>Subject:</h2>
      <ul>
        {subject.map((sub, index) => (
          <li key={index}>{sub}</li>
        ))}
      </ul>
      <button onClick={changeProperty}>add subject</button>
    </div>
  )
}

export default UseStateArray
