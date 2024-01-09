import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import logo1 from './Picture/logo1'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Aboutus from './Component/Aboutus'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <Aboutus/>
    </>
  )
}

export default App
