import React from 'react';
import ButtonBlue from '../Button/ButtonBlue';
import ButtonRed from '../Button/ButtonRed';
import HeroImg from '@/public/hero.svg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center'>
      <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 items-center w-[90%] sm:w-[80%] mx-auto px-4 md:px-8'>
        <div className='col-span-2'>
          <h1 data-aos='fade-right'
           className='text-[27px] md:text-[30px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[3rem] lg:leading-[4rem]'>
            Exploring Innovative Paths to Cultivate Your Business
          </h1>
          <p data-aos='fade-left' 
          data-aos-delay='200'
           className='text-[15px] md:text-[17px] lg:text-[17px] mb-[2rem] text-black opacity-90'>
            Giving the world an opportunity to get better designs and high-end industry-ready websites, to scale business and make the digital transformation of our new world,
            <span className='text-red-600'> To The Next Level</span>
          </p>
          <div  data-aos='zoom-in' 
          data-aos-delay='400'
          className='flex items-center space-x-4 md:space-x-6'>
            <ButtonBlue text='Get Started' />
            <ButtonRed text='Explore Features' />
          </div>
        </div>
        <div  data-aos='fade-left' 
          data-aos-delay='600'
        className='col-span-3 hidden md:block'>
          <Image src={HeroImg} alt='Hero' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
