import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
function App() {


  return (
    <>
      <Home/>
      <ScrollToTopButton/>
    </>
  )
}

export default App
