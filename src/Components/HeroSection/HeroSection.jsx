import React from 'react'
import './HeroSection.css'
import SocialMedia from './SocialMedia'
import bannerIMage from '../../assets/images/developer.png'

const HeroSection = () => {
  return (
    <div>
      <SocialMedia/>
        <div className='h-[100px] w-{'>
            <img className='w-full h-full' src={bannerIMage} alt="" />
        </div>
        <div></div>
    </div>
  )
}

export default HeroSection