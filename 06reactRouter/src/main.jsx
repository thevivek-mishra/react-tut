import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/about',
        element:<about/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
