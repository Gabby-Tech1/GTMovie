import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Navbar = () => {

  const {user, logOut} = UserAuth()
  const navigate = useNavigate()

  const handleLogOut = async() => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
      <Link to='/'>
        <h1 className='text-cyan-400 font-bold text-4xl cursor-pointer '>GTMovies</h1>
      </Link>
      {
          user?.email ?
        (<div className='flex item-center justify-center'>
          <Link to='/account'>
            <div className='flex items-center pr-2'>
              <img src="https://th.bing.com/th?id=OIP.Z306v3XdxhOaxBFGfHku7wHaHw&w=244&h=255&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" className='w-10 h-10 rounded-full'/>
              <button className='text-white hover:text-cyan-400 pr-4 pl-1 font-semibold'>Account</button>
            </div>
          </Link>
          
            <button onClick={handleLogOut} className='hover:bg-transparent hover:text-cyan-400 duration-500 ease-in-out bg-cyan-400 px-6 py-2 rounded font-semibold cursor-pointer text-white'>Sign Out</button>
          
        </div>) : 
        (
          <div>
          <Link to='/login'>
            <button className='text-white hover:text-cyan-400 pr-4 font-semibold'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='hover:bg-transparent hover:text-cyan-400 duration-500 ease-in-out bg-cyan-400 px-6 py-2 rounded font-semibold cursor-pointer text-white'>Create an account</button>
          </Link>
        </div>
        )
        }

    </div>
  )
}

export default Navbar