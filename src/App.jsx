import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Event from './Event.jsx'
import JSXBasics from './JSXBasics.jsx'
import Box from './Box.jsx'
import University from './University.jsx'
import StateClassComponent from './StateClassComp.jsx'
import DashboardClassComponent from './DashboardClassComponent.jsx'
import ExternalCSS from './ExternalCSS.jsx'
import UseStateExample from './UseStateExample.jsx'
import UseStateObj from './UseStateObj.jsx'
import UseStateArray from './UseStateArray.jsx'
import UseEffectExample from './UseEffectExample.jsx'
import WithoutUseContext from './UseContext/WithoutUseContext.jsx'
import ProviderComponent from './UseContext/ProviderComponent.jsx'

const myFunc = () => {
  console.log('abc')
}
function App() {
  
  return (
    <>
      {/* <JSXBasics/>
      <Box/>
      <University/>
      <DashboardClassComponent/>
      <ExternalCSS/> */}

      {/* <Event/> */}
      {/* <StateClassComponent/> */}
      {/* <UseStateExample/> */}
      {/* <UseStateArray/> */}
      {/* <UseEffectExample/> */}
      {/* <WithoutUseContext/> */}
      <ProviderComponent/>
    </>
  )
}

export default App
