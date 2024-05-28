import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@material-tailwind/react";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button>Button</Button>
      <div className='thediv'>hello after meeting the people of the heaven</div>
    </>
  )
}

export default App
