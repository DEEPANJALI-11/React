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
    
    setCounter(counter)
    setCounter(counter)
    setCounter(counter)
    setCounter(counter) 
    // useState will only update counter only once, all are in same batch, that why fiber was introduced 

    // setCounter((prevCounter)=> prevCounter+1) 
    // //now it will work for multiple times

    console.log('value Added',{counter});
    
  }
  const removeValue=()=>{
    // counter-=1
    if(counter>0)
      setCounter(counter-1)
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
