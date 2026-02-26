import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
  import { ToastContainer, toast } from 'react-toastify';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
      <ToastContainer />
    </>
  )
}

export default App
