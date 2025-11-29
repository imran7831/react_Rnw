import React, { useState } from 'react'
import './App.css'

const App = () => {

 const [num, setNum] = useState(0)
  function increase(){
   setNum(num+1)
  }
    function decrease(){
    setNum(num-1)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>increase</button>
       <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default App