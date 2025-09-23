import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Clip from './Clip'

let myObj={
  name:"Deepanjali",
  channel:"Code with Deepanjali"
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='bg-red-500 rounded'>Hii there Deepanjlai here</h1>
        <Clip name={myObj.name}  />
        <Clip username="Deepanjali" btnText="Click Me"/>
      </div>
     
    </>
  )
}

export default App
