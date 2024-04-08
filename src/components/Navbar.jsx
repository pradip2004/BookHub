import React, { useState } from 'react'
import logoImg from '../img/logo.png'
import {HiOutlineMenuAlt3} from "react-icons/hi" 
import { Link } from 'react-router-dom'
function Navbar() {
  const [toggleMenu, settoggleMenu] = useState(false)
  const handleNavbar = ()=> settoggleMenu(!toggleMenu)

  return (
    <div className='p-5 flex  justify-between items-center'>
      <div className="container mx-auto flex">
        <div className="brand-toggler w-full flex items-center justify-between">
          <Link to='/' className='flex items-center gap-3'>
            <img src={logoImg} alt="" className='w-16' />
            <span className='inline-block uppercase font-bold'>bookhub</span>
          </Link>
          <button className={`z-[11] fixed top-5 right-5 ${toggleMenu ? 'text-zinc-500' : 'text-white'} lg:hidden`} onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} />
          </button>
        </div>
        <div className={`fixed right-0 top-0 z-[10] bg-black h-screen w-[12rem] flex text-white py-20 justify-end px-5 ${toggleMenu ?  'translate-x-full ' : 'translate-x-0 '} lg:relative lg:h-auto lg:p-0 lg:w-full lg:bg-transparent lg:translate-x-0 lg:justify-end lg:text-black `}>
           <ul className={`${toggleMenu ?  'flex flex-col gap-10 items-end' : 'gap-5'}  lg:flex lg:gap-8`}>
            <li className='text-lg font-semibold  py-2'>
              <Link to='/book'>Home</Link>
            </li>
            <li className='text-lg font-semibold py-2'>
              <Link to='/about'>About</Link>
            </li>
           </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar