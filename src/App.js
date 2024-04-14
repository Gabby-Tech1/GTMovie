import React from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'
import LogIn from './Pages/LogIn'
import SignUp from './Pages/SignUp'
import Account from './Pages/Account'
import { AuthContextProvider } from './Context/AuthContext'
import ProtectedRoute from './Components/ProtectedRoute'

const App = () => {
  return (
    <>
    <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>} />
      </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App