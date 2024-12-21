import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import FeatureCard from './FeatureCard'
import Icon1 from '@/public/icon1.png'
import Icon2 from '@/public/icon2.png'
import Icon3 from '@/public/icon3.png'
import Icon4 from '@/public/icon4.png'
import Icon5 from '@/public/icon5.png'

const Features = () => {
  return (
    <div className=' mr-5'>
        <SectionHeading 
        headingMini="ideal solution for you"
        headingPrimary="Explore Ultimate features"
         />

         <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]'>
          <div data-aos='zoom-in' data-aos-ancher-placement='top-center'>
            <FeatureCard title="Email Marketing" image={Icon1.src}/>
          </div>
          <div data-aos='zoom-in'
           data-aos-delay='200' 
           data-aos-ancher-placement='top-center'>
            <FeatureCard title="Website Developpement" image={Icon2.src}/>
          </div>
          <div data-aos='zoom-in'
           data-aos-delay='400' 
           data-aos-ancher-placement='top-center'>
            <FeatureCard title="Mobile App developpment" image={Icon3.src}/>
          </div>
          <div data-aos='zoom-in'
           data-aos-delay='600' 
           data-aos-ancher-placement='top-center'>
            <FeatureCard title="Social Media Marketing" image={Icon4.src}/>
          </div>
          <div data-aos='zoom-in'
           data-aos-delay='800' 
           data-aos-ancher-placement='top-center'>
            <FeatureCard title="Desktop App" image={Icon5.src}/>
          </div>
          <div data-aos='zoom-in'
           data-aos-delay='1000' 
           data-aos-ancher-placement='top-center'>
            <FeatureCard title="Security" image={Icon1.src}/>
          </div>
         </div>
    </div>
  )
}

export default Features