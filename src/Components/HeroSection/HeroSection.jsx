import React from 'react'
import './HeroSection.css'
import SocialMedia from './SocialMedia'
import bannerIMage from '../../assets/images/developer.png'

const HeroSection = () => {
  return (
    <div className='flex justify-between mt-12'>
      <SocialMedia/>
        <div className='h-[400px] w-[400px]'>
            <img className='w-full h-full rounded-full shadow-custom-shadow animate-pulse' src={bannerIMage} alt="" />
        </div>
        <div></div>
    </div>
  )
}

export default HeroSection