import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../contexts/Context';

function SearchForm() {
  
  const handleSubmit = () => { }
  return (
    <div className='w-full max-w-[600px] '>
      <div className='w-full bg-white rounded-full px-6'>
        <form className='w-full flex items-center justify-center' onSubmit={handleSubmit}>
          <input type="text" placeholder='The Lost World....' className='py-3 px-2 text-xl w-full border-none focus:outline-none' />
          <button type="submit" onClick={handleSubmit} className=''>
            <FaSearch size={32} className='text-purple-500'/>
          </button>


        </form>
      </div>
    </div>
  )
}

export default SearchForm