import React, { useEffect, useState } from 'react'
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
  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  }, [scroll])
  return (
    <div className={scroll
      ? "h-16 top-0 z-30 sticky  bg-navBg  transition-ease-in-out duration-3000  mx-auto py-4   " 
      :
      " h-16  py-4 bg-navBg"}>
      <div className='flex justify-between items-center lg:max-w-7xl w-[calc(100%-2rem)] mx-auto '>
        <img className="h-8" src={Logo} alt="" />
        <NavOption > </NavOption>
        <Drawer   ></Drawer>
      </div>
    </div>
  )
}

export default Navbar
