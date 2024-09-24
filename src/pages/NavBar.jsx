import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logoa.png'
export default function NavBar() {
  const [isShow,setIsShow] = useState(false);
  // const location = useLocation()
  // console.log(location.pathname);
  
  return (
    <div>
        <nav className="backdrop-blur-sm border-b bg-white  fixed w-full shadow dark:border-b z-40">
            <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* <!-- Mobile menu button--> */}
                  <button onClick={()=>setIsShow(!isShow)} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
            </div>
            <div className="flex w-full items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex  jusfit flex-shrink-0 items-center">
                <img className="h-8 w-auto bg-transparent mr-2" src={logo} alt="Your Company"/>
                <p className='italic text-primary'>SPA & MASSAGE</p>

              </div>
              <div className="hidden w-4/5 sm:ml-6 sm:block">
                <div className="flex justify-end items-center space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  {/* <ModeToggle/> */}
                  {/* <Link to={DASHBOARD_ROUTE} className={`${DASHBOARD_ROUTE == location.pathname && 'bg-gray-700 text-white'} rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white`}>Dashboard</Link>
                  <Link to={SALLES_ROUTE} className={`${SALLES_ROUTE == location.pathname && 'bg-gray-700 text-white'} rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white`}>Salles</Link>
                  <Link to={MODULES_ROUTE} className={`${MODULES_ROUTE == location.pathname && 'bg-gray-700 text-white'} rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white`}>Modules</Link>
                  <Link to={CLASSE_ROUTE} className={`${CLASSE_ROUTE == location.pathname && 'bg-gray-700 text-white'} rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white`} >Classes</Link>
                  <Link to={PROFS_ROUTE} className={`${PROFS_ROUTE == location.pathname && 'bg-gray-700 text-white'} rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white`}>Profs</Link>
                  <Link to={SEANCES_ROUTE} className={`${SEANCES_ROUTE == location.pathname && 'bg-gray-700 text-white'} rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white`}>Seances</Link> */}
                  {/* <Link to={'/#khadamtona'}className={`${'/' == location.pathname && 'bg-gray-700 text-white'} rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white`} >Home</Link> */}
                  {/* <Link to={'/'}className={`${'/' == location.pathname && 'bg-gray-700 text-white'} rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white`} >Home</Link>
                  <Link to={'/'}className={`${'/' == location.pathname && 'bg-gray-700 text-white'} rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white`} >Home</Link> */}
                  {/* {user.name} */}
                  {/* <DropDownMenu/> */}
                  <a className='rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-hover hover:text-white' href="#khadamtona">خدماتنا</a>
                  <a className='rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-hover hover:text-white' href="#raisia">الرئيسية</a>
                  <a className='rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-hover hover:text-white' href="#contact">
                  تواصل
                  معنا
                  </a>

                </div>
                
              </div>
            </div>
            
          </div>
          </div>       
        <div className={`${!isShow && "hidden"}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a className=' block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-hover hover:text-white' href="#raisia">الرئيسية</a>
            <a className=' block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-hover hover:text-white' href="#khadamtona">خدماتنا</a>
            <a className=' block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-hover hover:text-white' href="#contact">تواصل
            معنا</a>

            {/* <Link to={DASHBOARD_ROUTE} className={`${DASHBOARD_ROUTE == location.pathname && 'bg-gray-700 text-white'} block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white`}>Dashboard</Link>
            <Link to={SALLES_ROUTE} className={`${SALLES_ROUTE == location.pathname && 'bg-gray-700 text-white'} block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white`}>Salles</Link>
            <Link to={MODULES_ROUTE} className={`${MODULES_ROUTE == location.pathname && 'bg-gray-700 text-white'} block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white`}>Modules</Link>
            <Link to={CLASSE_ROUTE} className={`${CLASSE_ROUTE == location.pathname && 'bg-gray-700 text-white'} block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white`}>Classes</Link>
            <Link to={PROFS_ROUTE} className={`${PROFS_ROUTE == location.pathname && 'bg-gray-700 text-white'} block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white`}>Profs</Link>
            <Link to={SEANCES_ROUTE} className={`${SEANCES_ROUTE == location.pathname && 'bg-gray-700 text-white'} block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white`}>Seances</Link> */}
          </div> 
          
        </div>
       
      </nav>
    </div>
  )
}
