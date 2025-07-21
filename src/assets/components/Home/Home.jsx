import React from 'react'
import banner from './banner2.jpg'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import About from "../About/About"
import Profile from '../Profile/Profile'
import Contact from "../Contact/Contact"

const Home = () => {
  const navigate = useNavigate()

  return (
   <>
     <div className="w-full h-auto relative">
      {/* Banner Image */}
      <img
        src={banner}
        alt="Banner"
        className="w-full h-[90vh] object-cover brightness-75"
      />

      {/* Positioned Text Content */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[65%] md:top-[70%] text-center px-4 text-white z-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-5xl font-bold italic"
        >
          NOMAN'S <span className="text-orange-600">COLLECTIONS</span>
        </motion.h1>

        {/* Typewriter Text */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-3xl font-bold italic text-orange-500 mt-4"
        >
          <Typewriter
            words={['Choose Your STYLE', 'Wear with Confidence', 'Be Unique']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate('/products')}
          className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg"
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  
    <div data-aos="fade-up">
  <About />
</div>


    <div data-aos="fade-left">
  <Profile />
</div>

<div data-aos="fade-up">
  <Contact />
</div>

   </>
  )
}

export default Home
