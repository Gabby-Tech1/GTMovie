import React from 'react'
import SavedMovies from '../Components/SavedMovies'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/74568a0f-3be4-43e5-827b-0ec60875e566/GH-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" className='w-full h-[300px]  object-cover'/>
      <div className='w-full h-[300px] bg-black/50 fixed top-0 left-0'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
      </div>
      </div>
      <SavedMovies/>
    </>
  )
}

export default Account