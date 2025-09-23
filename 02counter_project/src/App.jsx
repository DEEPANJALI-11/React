import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(0)


  //let counter=15
  const addValue=()=>{
    counter=counter+1
    setCounter(counter)
    console.log('value Added',{counter});
    
  }
  const removeValue=()=>{
    counter-=1
    setCounter(counter)
  }
  return (
    <>
      <div>
        <h1>Chai or react</h1>
        <h2>counter value:{counter}</h2>
        <button onClick={addValue}>Add value {counter}</button>
        <br/>
        <button onClick={removeValue}>Remove value</button>
       </div> 
    </>
  )
}

export default App
