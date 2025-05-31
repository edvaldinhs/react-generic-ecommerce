import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './app/routes/home'
import Register from './app/routes/register'
import Cart from './app/routes/cart'
import './styles/globals.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
