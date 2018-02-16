import React from 'react'
// import Login from './components/Login'
import Signup from './components/Signup'
// import UserProfile from './components/UserProfile'
import TopNav from './components/TopNav'
import './App.css'

export const App = () => {
  return (
    <div>
      <TopNav />
      <Signup/>
    </div>
  )
}

export default App
