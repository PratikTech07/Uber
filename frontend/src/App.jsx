import React, { useContext } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import UserLogin from './pages/userLogin'
import UserSignUp from './pages/userSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import Start from './pages/Start'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/captainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'

const App = () => {


  return (
    <div >
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignUp />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignUp />} />
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />
        <Route path='/user/logout' element={<UserProtectedWrapper>
          <UserLogout />
        </UserProtectedWrapper>} />
        <Route path='/captain-home' element={<CaptainProtectWrapper>
          <CaptainHome />
        </CaptainProtectWrapper>} />
        <Route path='/captain/logout' element={<CaptainProtectWrapper>
          <CaptainLogout />
        </CaptainProtectWrapper>} />
      </Routes>
    </div>
  )
}

export default App