
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [text, setText] = useState('')

  //variation1=>Every Render
  // useEffect(() => {
  //   console.log("UI Rendering Done");
  // })

  //variation2=>First Render
  useEffect(() => {
    console.log("UI Rendering Done");
  }, []);

  const changeHandler = (event) => {
    setText(event.target.value)
    console.log(text);
    
  }

  return (
    <>
      <input
        type="text"
        onChange={changeHandler}
      />
    </>
  )
}

export default App
