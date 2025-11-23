

import React, {useState} from 'react'

const WithoutUseContext = () => {
    const [subject, setSubject] = useState("React")
  return (
    <div>
      <h2>
        This is the first conponent and passing subject as property to 2nd component
      </h2>
      <ComponentA subject = {subject}/>
    </div>
  )
}

const ComponentA = ({subject}) =>  {
    return (
        <div>
            <h2>This is a component A and receiving property from WithoutUseContext component</h2>
            <ComponentB subject = {subject} />
        </div>
    )
}


const ComponentB = ({subject}) => {
    return (
        <div>
            <h2>
                This is componentB and receiving properties from ComponentA
            </h2>
            <h2>
                Hello, I am studing the subject : {subject}
            </h2>
        </div>
    )
}
export default WithoutUseContext
