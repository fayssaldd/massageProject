import React from 'react'
import NavBar from '../pages/NavBar'
import { Outlet } from 'react-router-dom'
import image4 from '../assets/images/massage4.jpg'
export default function Layout() {
  return (
    <>
    <header>
        <NavBar/>
    </header>
    <div
    className="relative w-full flex justify-center top-16">
        <div className="bg-gray-50 rounded-l w-full rounded-lg ">
            <Outlet />
        </div>
    </div>
    </>
  )
}
