import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import MainLayOut from './Layout/MainLayOut'
import Homepage from './Pages/HomePage/Homepage'
import Books from './Pages/Books/Books'
const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayOut,
    children: [
      {
        index: true,
        Component: Homepage
      },
      {
        path: '/books',
        Component: Books
      }
    ]
    
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
