import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";

function Layout() {
  return (
    <>
    <div style={{width:"100%",height:"40px",backgroundColor:"pink"}}>
      
    <Link to="home" style={{margin:'50px',fontSize:"20px"}}>Home</Link>
    <Link to="about"  style={{margin:'50px',fontSize:"20px"}}>About</Link>
    <Link to="contact"  style={{margin:'50px',fontSize:"20px"}}>Contact</Link>
    <Link to="login" style={{margin:'50px',fontSize:"20px"}}>Login</Link>
    <Link to="https://www.google.com/"><FaInstagram /></Link>

   
    
    </div>
    
    <Outlet/>
    </>
  )
}

export default Layout
