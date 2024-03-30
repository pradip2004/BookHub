import React from 'react'
import Navbar from '../components/Navbar'
import SearchForm from '../components/SearchForm'

function Header() {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <div className="min-h-[75vh] relative w-full " >
        <div
          className="flex flex-col items-center justify-center text-center min-h-[75vh] bg-gradient-to-r from-violet-500 to-fuchsia-500 absolute p-10">
          <h2 className='text-3xl font-semibold capitalize mb-10 text-white'>find your book of choice.</h2>
          <p className='text-xl font-semibold mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab laudantium quidem expedita, libero harum, sapiente aspernatur id nobis voluptatem ipsa dicta similique dolores!</p>
          <SearchForm />
        </div>
      </div>

    </div >
  )
}

export default Header