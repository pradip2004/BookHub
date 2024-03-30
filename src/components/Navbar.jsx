import React, { useState } from 'react'
import logoImg from '../img/logo.png'
import {HiOutlineMenuAlt3} from "react-icons/hi" 
import { Link } from 'react-router-dom'
function Navbar() {
  const [toggleMenu, settoggleMenu] = useState(false)
  const handleNavbar = ()=> settoggleMenu(!toggleMenu)

  return (
    <div className='p-5 flex  justify-between items-center'>
      <div className="container mx-auto">
        <div className="brand-toggler w-full flex items-center justify-between">
          <Link to='/' className='flex items-center gap-3'>
            <img src={logoImg} alt="" className='w-16' />
            <span className='inline-block uppercase font-bold'>bookhub</span>
          </Link>
          <button className='lg:hidden' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} style={{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }}/>
          </button>
        </div>
        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
           
        </div>
      </div>
    </div>
  )
}

export default Navbar