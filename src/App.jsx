import React from 'react'
import { Button } from "@material-tailwind/react";
import Navbar from './Components/Navbar/Navbar';
const App = () => {
  return (
    <div className='flex justify-between bg-white'>
      <Navbar/>
    </div>
  )
}

export default App