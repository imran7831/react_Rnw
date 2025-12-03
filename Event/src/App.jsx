
import { useState } from 'react'
import './App.css'

const App = () => {

   const [count, setCount] = useState(0);
   const [mouse, setMouse] = useState('')

   const handleClick = () =>{
    setCount(count + 1);
   };

   const handledDoubleClick = () =>{
    setCount(0);
   }


  const handleMouseover = () =>{
      setMouse();
   console.log("mouse in");
  }


  return (
    <div className='container'>
      <div className='event1'>
        <div className="card">
            <h2>On Click Event</h2>
            <button onClick={handleClick}
            onDoubleClick={handledDoubleClick}>Click Me! (Double-click to reset)</button>
            <h3>Count : {count}</h3>
        </div>
      </div>
      <div className="event2">
        <div className="card1">
            <h2>MouseOver Event</h2>
            <div className="box" onMouseOver={handleMouseover}>
              <h3>Mouse move hear</h3>
            </div>
        </div>
      </div>
      <div className="event3">
         <div className="card2"></div>
      </div>
      <div className="event4">
          <div className="card3">

          </div>
      </div>
    </div>
  )
}

export default App