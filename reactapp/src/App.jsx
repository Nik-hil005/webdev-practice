import React, { useState } from 'react'
import './App.css'
import News from './component/Sample'
import HomePage from './component/HomePage'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <News count={count} setCount={setCount}/>
    </>
  )
}

export default App
