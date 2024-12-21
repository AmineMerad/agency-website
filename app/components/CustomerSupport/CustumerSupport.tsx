import React from 'react' 
import Image from 'next/image'
import SupportImg from '@/public/support.jpg'
import { CheckIcon } from '@heroicons/react/16/solid'
const CustumerSupport = () => {
  return (
    <div className='pt[3rem] pb-[3rem] '>
        
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center'>
            <div data-aos='fade-right'
                 data-aos-anchor-placement='top-center'
             className='order-2 lg:order-1'>
                <Image src={SupportImg} alt='support' />

            </div>
            <div className='order-1 lg:order-2 '>
                <h1  data-aos='fade-left'
                     data-aos-anchor-placement='top-center'
                     data-aos-delay='200'
                 className='text-[20px] md:text-[25px] lg:text-[28px] text-[#02073e] font-bold leading-[2rem] md:leading-[3rem]'>
                    Customer Support is our priority with our support team your needs will be realised
                </h1>
                <p   data-aos='fade-right'
                     data-aos-anchor-placement='top-center'
                     data-aos-delay='400'
                 className='mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px]'>
                    we have provided h24 support customer service for your help and to drive you to better results , if you have a trouble or an error in a web site we have developped , we work hard to check for it in time 
                </p>
                <div data-aos='fade-up'
                     data-aos-anchor-placement='top-center'
                     data-aos-delay='600'
                     className='flex items-center mb-[1rem] space-x-3'>
                    <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600'/>
                    <p className='text-[17px] text-[#02073e]'>
                        Medical and Vision
                    </p>
                </div>
                <div data-aos='fade-up'
                     data-aos-anchor-placement='top-center'
                     data-aos-delay='800'
                     className='flex items-center mb-[1rem] space-x-3'>
                    <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600'/>
                    <p className='text-[17px] text-[#02073e]'>
                        400 (k) Savings
                    </p>
                </div>
                <div data-aos='fade-up'
                     data-aos-anchor-placement='top-center'
                     data-aos-delay='1000'
                     className='flex items-center mb-[1rem] space-x-3'>
                    <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600'/>
                    <p className='text-[17px] text-[#02073e]'>
                        Hsas Fsas
                    </p>
                </div>
                <div data-aos='fade-up'
                     data-aos-anchor-placement='top-center'
                     data-aos-delay='1200'
                     className='flex items-center mb-[1rem] space-x-3'>
                    <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600'/>
                    <p className='text-[17px] text-[#02073e]'>
                        Medical and Vision
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CustumerSupport