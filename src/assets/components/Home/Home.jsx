import React from 'react'
import banner from '../../../assets/banner2.jpg'

const Home = () => {
  return (
    
      <div className="w-full md:h-[900px] h-auto relative ">
        <img src={banner} alt="" className='w-[100%] h-[100%] object-cover' />
        <div className=" absolute md:top-[500px] top-[280px] md:left-[100px] left-10 flex flex-col gap-3">
          <h1 className='md:text-5xl text-xl font-bold italic'>NOMAN'S <span className='text-orange-600'>COLLECTIONS</span></h1>
          <h2 className='md:text-5xl text-xl font-bold text-black italic'><span className='text-orange-500'>Choose</span> Your <span className='text-orange-500'>STYLE</span></h2>
          <button className=' md:h-[70px] h-[50px] w-[150px] text-[16px] md:p-0 py-2 px-5 md:text-2xl transition-all md:w-[300px] duration-300 rounded-2xl font-bold bg-black text-orange-500 hover:border-4 hover:border-orange-500'>Shop Now</button>

        </div>
      </div>
   
  )
}

export default Home
