import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './contexts/Context.jsx'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>

  ,
)
