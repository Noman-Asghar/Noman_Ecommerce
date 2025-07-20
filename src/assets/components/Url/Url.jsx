import React from 'react'
import { useParams } from 'react-router-dom'

const Url = () => {
    const {userId} = useParams()
  return (
    <div className='w-full h-[450px] flex justify-center items-center bg-gray-500'>
      <h1 className='text-[70px] text-black font-bold text-center'>USER :<span className='text-orange-600'>{userId}</span></h1>
    </div>
  )
}

export default Url
