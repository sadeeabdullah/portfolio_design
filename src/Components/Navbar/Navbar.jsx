import React, { useState } from 'react'
import Drawer from '../Drawer/Drawer.jsx'
import Logo from '../../assets/images/logo.png'
import NavOption from '../NavOption/NavOption.jsx'

const Navbar = () => {
  const [scroll,setScroll] = useState(false);
  const handleScroll = () => {
    if(window.scrollY>50){
      setScroll(true);
    }else{
      setScroll(false)
    }
  }
  return (
    <div>
      <div className='flex justify-between items-center lg:max-w-7xl lg:mx-auto py-4 mx-4 '>
        <img className="h-8" src={Logo} alt="" />
        <NavOption > </NavOption>
        <Drawer ></Drawer>
      </div>
    </div>
  )
}

export default Navbar
