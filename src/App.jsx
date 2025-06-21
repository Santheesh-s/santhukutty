import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const numbers=[1,2,3,"Four"];
  const listitems=numbers.map(num=><li key={num}>{num}</li>)
  return (
      <div>
        {listitems}
    </div>
  )
}

export default App;