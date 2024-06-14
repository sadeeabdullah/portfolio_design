import React from 'react'
import { Button } from "@material-tailwind/react";
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
const App = () => {
  return (
    <div >
      <Navbar/>
      <div className='max-w-7xl mx-auto'>
      <HeroSection/>
      </div>
    </div>
  )
}

export default App