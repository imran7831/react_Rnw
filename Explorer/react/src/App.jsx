import React from 'react'
import ClassDemo from './components/ClassDemo'
import Dashboard from './components/Dashboard'
import EffectModule from './components/EffectModule'
import FormModule from './components/FormModule'
import JSXmodules from './components/JSXModles'
import ListModule from './components/ListModule'
import PropsState from './components/PropsState'

const App = () => {
  return (
    <div>
      <ClassDemo/>
      <Dashboard/>
      <EffectModule/>
      <FormModule/>
      <JSXmodules/>
      <ListModule/>
      <PropsState/>
    </div>
  )
}

export default App