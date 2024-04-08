import React from 'react'
import LoaderImg from '../img/loader.svg'
function Loader() {
  return (
    <div className='flex flex-col'>
      <img src={LoaderImg} alt="" />
    </div>
  )
}

export default Loader