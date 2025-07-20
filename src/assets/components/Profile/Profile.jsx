import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchedProfile } from '../../redux/slices/githubSlice'
import { motion } from 'framer-motion'

const Profile = () => {
  const { profile: data, isLoading, isError } = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchedProfile())
  }, [dispatch])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <h1 className="text-2xl font-bold animate-pulse text-gray-600">Loading...</h1>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <h1 className="text-2xl text-red-500 font-bold">Error: {isError}</h1>
      </div>
    )
  }

  return (
    <div className="w-full py-[80px] px-4 bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col md:flex-row gap-10 justify-center items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="p-6 w-full max-w-md flex flex-col items-center rounded-xl bg-white/30 backdrop-blur-md shadow-xl hover:shadow-2xl transition duration-300 hover:bg-white/50 border border-white gap-4"
      >
        <img
          src={data?.avatar_url}
          alt="GitHub Avatar"
          className="rounded-full w-[150px] h-[150px] object-cover shadow-lg border-4 border-orange-400"
        />
        <p className="text-2xl font-bold text-gray-800">
          <span className="text-orange-600">Name:</span> {data?.login}
        </p>
        <p className="text-md text-gray-700 font-medium text-center">
          <span className="font-bold text-black">Bio:</span> {data?.bio || 'No bio available'}
        </p>
        <p className="text-lg font-semibold text-gray-900">
          Public Repos: <span className="text-orange-500">{data?.public_repos}</span>
        </p>
        <a
          href={data?.html_url}
          target="_blank"
          rel="noreferrer"
          className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all"
        >
          View GitHub Profile
        </a>
      </motion.div>
    </div>
  )
}

export default Profile
