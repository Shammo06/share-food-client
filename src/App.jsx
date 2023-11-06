
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer'

function App() {
 

  return (
    <>
      <div>
          <Outlet></Outlet>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App
