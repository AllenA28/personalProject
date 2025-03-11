import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div style={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to bottom, #000000 0%, #0a0a2e 100%)'
      }}>
        <Navbar />
        <Outlet />

        
        
      </div> 
  )
}

export default MainLayout

{/* */}