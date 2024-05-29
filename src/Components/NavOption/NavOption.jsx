import React,{useEffect,useState} from 'react'
import { Link } from 'react-scroll'

const NavOption = () => {
  return (
    <div >
        <ul className=' text-lg text-textColor gap-8 hidden lg:flex'>
            <Link
              to="home"
              spy={true} 
              hashSpy={true}
              isDynamic={true}
              ignoreCancelEvents={true}
              spyThrottle={500}
              className='cursor-pointer'
              
              smooth={true} 
              offset={50} 
              duration={500} >
              Home
            </Link>
        </ul>
    </div>
  )
}

export default NavOption


