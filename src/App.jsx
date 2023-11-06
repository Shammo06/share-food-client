
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'

function App() {
 

  return (
    <>
      <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App
