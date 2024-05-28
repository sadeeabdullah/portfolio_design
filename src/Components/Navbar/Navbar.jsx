import React from 'react'
import Drawer from '../Drawer/Drawer.jsx'
import Logo from '../../assets/images/logo.png'
import NavOption from '../NavOption/NavOption.jsx'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center max-w-7xl mx-auto py-4'>
        <img className="h-8" src={Logo} alt="" />
        <NavOption > </NavOption>
        <Drawer ></Drawer>
      </div>
    </div>
  )
}

export default Navbar
