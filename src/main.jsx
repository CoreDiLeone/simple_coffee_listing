import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from '../src/components/Home.jsx'
import Product from '../src/components/Product.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  }, {
    path: '/product',
    element: <Product />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
