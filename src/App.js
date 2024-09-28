import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Portfolio from './component/Portfolio/Portfolio'
import AboutUs from './component/About us/AboutUs'
import Footer from './component/Footer/Footer'
import Wedding from './component/Services/Weddings/Wedding'
import Events from './component/Services/Events/Events'
import ContactUs from './component/Contact/ContactUs'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><Portfolio/></>
    },

    {
      path: '/AboutUs',
      element: <><Navbar/><AboutUs/></>
    },

    {
      path: '/Wedding',
      element: <><Navbar/><Wedding/></>
    },

    {
      path: '/Events',
      element:<><Navbar/><Events/></>
    },

    {
      path: '/ContactUs',
      element: <><Navbar/><ContactUs/></>
    },
  ])

  return (
    <>
    

    <RouterProvider router={router} />

    {/* <Footer/> */}
    {/* <Portfolio/> */}
    {/* <AboutUs/> */}
    {/* <Wedding/> */}
    {/* <Event/> */}
    {/* <ContactUs/> */}
    </>
  )
}

export default App