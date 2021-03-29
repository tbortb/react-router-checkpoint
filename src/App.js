import React from 'react'
import Login from './components/Login'
import TopNav from './components/TopNav'
import './App.css'
import Content from './components/Content'

export const App = () => {
  return (
    <div>
      <TopNav />
      <Content />
    </div>
  )
}

export default App
