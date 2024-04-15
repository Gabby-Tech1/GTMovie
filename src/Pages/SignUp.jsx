import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const navigate = useNavigate()

    const {user, signUp} = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await signUp(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    
  return (
    <>
        <div className='w-full h-screen'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/74568a0f-3be4-43e5-827b-0ec60875e566/GH-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" className='sm:block absolute w-full h-full  object-cover'/>
            <div className='bg-black/80 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-cyan-300 bg-opacity-45 rounded-3xl text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Create An <span className='text-cyan-500'>Account</span> </h1>
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                            <input onChange={(e) => setUsername(e.target.value)} className='p-3 my-2 bg-cyan-100 bg-opacity-30 rounded-xl focus:outline-none text-white' type="text" placeholder='Username' required/>
                            <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-cyan-100 bg-opacity-30 rounded-xl focus:outline-none text-white' type="email" placeholder='Email' autoComplete='email' required/>
                            <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-cyan-100 bg-opacity-30 rounded-xl focus:outline-none text-white' type="password" placeholder='Password' autoComplete='email' required/>
                            <li className='text-sm text-gray-800'>Password should contain atleast 6 characters</li>
                            <button className='bg-cyan-400 py-2 my-6 rounded-full text-xl font-semibold hover:bg-transparent hover:border-cyan-400 hover:border hover:text-cyan-400 duration-500 ease-in-out'>Sign Up</button>
                            <div className='flex justify-between items-center text-sm text-gray-300'>
                                <p className='ml-2'><input type="checkbox" className='mr-1'/>Remember Me</p>
                                <p className='cursor-pointer'>Need Assistance?</p>
                            </div>
                            <h1 className='text-lg py-8'>Already have an account? <Link to="/login" className='text-cyan-600 hover:text-white duration-300 ease-in-out'>Log In</Link></h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp