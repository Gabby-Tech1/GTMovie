import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'
import { ImWarning } from "react-icons/im";


const LogIn = () => {

  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const {user, logIn} = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        try {
            await logIn(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }

  return (
    <>
      <div className='w-full h-screen'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/74568a0f-3be4-43e5-827b-0ec60875e566/GH-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" className='sm:block absolute w-full h-full  object-cover'/>
            <div className='bg-black/80 fixed top-0 left-0 w-full h-screen'>

            </div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-cyan-300 bg-opacity-45 rounded-3xl text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign <span className='text-cyan-500'>In</span> </h1>
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                            <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-cyan-100 bg-opacity-30 rounded-xl focus:outline-none text-white' type="email" placeholder='Email' autoComplete='email' required/>
                            <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-cyan-100 bg-opacity-30 rounded-xl focus:outline-none text-white' type="password" placeholder='Password' required/>
                            <button className='bg-cyan-400 py-2 my-6 rounded-full text-xl font-semibold hover:bg-transparent hover:border-cyan-400 hover:border hover:text-cyan-400 duration-500 ease-in-out'>Sign In</button>
                            {error ? <div className='text-red-400 pb-3 text-center font-semibold flex items-center justify-center'><ImWarning /><p className='pl-2'> Invalid Email or Password!!!</p></div> : null}
                            <div className='flex justify-between items-center text-sm text-gray-300'>
                                <p className='mr-2'><input type="checkbox" />Remember Me</p>
                                <p className='cursor-pointer'>Forgot Password?</p>
                            </div>
                            <h1 className='text-lg py-8'>New Here? <Link to="/signup" className='text-cyan-600 hover:text-white duration-300 ease-in-out'>Create an account</Link></h1>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LogIn