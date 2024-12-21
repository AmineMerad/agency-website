import React from 'react'
import Image from 'next/image'
import CompanyImg from '@/public/customer.png'

const Company = () => {
  return (
    <div className='pt-[6rem] pb-[3rem]'>
        <h1 className='mb-[1.5rem] font-bold text-[22px] text-center md:text-[30px] text-[#0207e]'>
            Company who also worked for us
        </h1>
        <p className='w-[90%] sm:w-[85%] md:w-[65%] lg:w-[65%] xl:w-[55%] mx-auto text-[17px] text-center
        text-gray-950'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aliquid dolorum, cumque repellendus harum laudantium maxime ipsa facere laborum deleniti reiciendis atque aperiam velit voluptatibus eum earum. Rem, delectus nisi.
        </p>
        <p className='text-center  text-[17px] mt-[1.7rem] font-[500] cursur-pointer text-blue-500'>Explore Details</p>
        <div className='mt-[2rem] text-center w-[80%] mx-auto'>
            <Image src={CompanyImg} alt='company' />

        </div>
    </div>
  )
}

export default Company