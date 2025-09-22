import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
function Myapp(){
    return (
        <h1>your chai is ready</h1>
    )
}

ReactDom.createRoot(document.getElementById('root'))
render(
    <Myapp/>
)