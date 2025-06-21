import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const inputRef=useRef();

const handleSubmit=(e)=>{
  e.preventDefault();
  alert(`Submitted Name:${inputRef.current.value}`);

};
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App;