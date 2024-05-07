import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)//useState me kuch v pass kr skte hai 


  const addValue = () => {
    if (counter >= 0 && counter < 20)
      setCounter(counter + 1)
    //UI pr show karane k liye or state change krne k liye useState ka use krte hai
    //where counter is a variable and setCounter is a method for using set the Value

  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  const resetValue = () => {
    setCounter(0)
  }

  return (
    <>
      <h1>Gulshan Kumar singh</h1>
      <h2>Increament and Decrement</h2>
      <div>
        <button onClick={addValue}>Add Value</button>
        <div>{counter}</div>

        <div> <button onClick={removeValue}>Remove Value  </button></div>
        <div><button onClick={resetValue}>Reset</button></div>
      </div>
    </>
  )
}

export default App
