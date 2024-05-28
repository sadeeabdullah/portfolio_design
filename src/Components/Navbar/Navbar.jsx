import React from 'react'
import Drawer from'../Drawer/Drawer.jsx'
import logo from '../../assets/react.svg'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between items-center w-full'>
        <img src={logo} alt="" />
        <Drawer/>
        </div>
    </div>
  )
}

export default Navbar