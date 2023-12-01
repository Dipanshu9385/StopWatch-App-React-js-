import React, { useContext, useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
import Theme from "../Comp/Theme"
import { ThemeContext } from '../Comp/ThemeContext'

const Header = () => {
  // const[themeColor,setthemeColor]=useState('white')
  const {backgroundColor}=useContext(ThemeContext)



  // const updateThemeColor=(color)=>{
  //   setthemeColor(color)
  // }



  return (
    <div>
      <header className="shadow sticky z-50 top-0">
      <nav className={` bg-${backgroundColor} border-gray-200 px-4 lg:px-6 py-2.5`}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3  h-12 "
                            alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className=" bg-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              
              <Theme  />
            </Link>
            
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          ><ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <NavLink
              to='/'
              className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 border-b
              ${isActive && backgroundColor=== 'black' ? 'text-orange-500' : ''}
              ${isActive && backgroundColor=== 'white' ? 'text-orange-500' : ''}
              ${!isActive && backgroundColor=== 'black' ? 'text-white' : ''}
              ${!isActive && backgroundColor=== 'white' ? 'text-black' : ''}
                border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-700 lg:p-0`
              }
            >
              StopWatch
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/timer'
              className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 border-b
                ${isActive && backgroundColor=== 'black' ? 'text-orange-500' : ''}
                ${isActive && backgroundColor=== 'white' ? 'text-orange-500' : ''}
                ${!isActive && backgroundColor=== 'black' ? 'text-white' : ''}
                ${!isActive && backgroundColor=== 'white' ? 'text-black' : ''}
                border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-700 lg:p-0`
              }
            >
              Timer
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/date'
              className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 border-b
                ${isActive && backgroundColor=== 'black' ? 'text-orange-500' : ''}
                ${isActive && backgroundColor=== 'white' ? 'text-orange-500' : ''}
                ${!isActive && backgroundColor=== 'black' ? 'text-white' : ''}
                ${!isActive && backgroundColor=== 'white' ? 'text-black' : ''}
                border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-700 lg:p-0`
              }
            >
              Date
            </NavLink>
          </li>
        </ul>
           
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Header
