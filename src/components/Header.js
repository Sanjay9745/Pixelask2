import React from 'react'
import "../styles/style.css"
import Navbar from './Navbar'
import Hero from './Hero'


function Header() {
  return (
    <div>
      <header style={{background:`url(${process.env.PUBLIC_URL}/background.gif)`}}>
       
      <Navbar/>
     <Hero/>
    
      </header>
    </div>
  )
}

export default Header
