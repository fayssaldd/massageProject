import React from 'react'
import NavBar from '../pages/NavBar'
import { Outlet } from 'react-router-dom'
import backgroundImg from '../assets/background.jpg'
export default function Layout() {
  return (
    <>
    <header>
        <NavBar/>
    </header>
    <div
    className="relative w-full flex justify-center top-16">
        <div 
        style={{ backgroundImage: `url(${backgroundImg})` }} 
          className="bg-gray-50 bg-cove rounded-l w-full rounded-lg "
        >
          <Outlet />
        </div>
    </div>
    </>
  )
}
