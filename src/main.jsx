import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import CustomCursor from './components/CustomCursor.jsx'
import { Footer, Navbar } from './components/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CustomCursor />
      <Navbar/>
      <App />
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
