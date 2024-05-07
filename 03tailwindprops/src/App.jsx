

import './App.css'
import Card from './components/Card'

function App() {

  let myObject = {
    name: "Gulshan",
    age: 24
  }

  return (
    <>
      <h1 className='bg-red-500  text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Gulshan" btnText="click me" />
      <Card username="Rohit" btnText="visit me" />


    </>
  )
}

export default App
