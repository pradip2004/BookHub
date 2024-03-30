import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'
function App() {
  return (
    <div>
      

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/book' element={<BookList/>}/>
        <Route path='/book/:id' element={<BookDetails/>}/>
      </Routes>
    </div>
  )
}

export default App