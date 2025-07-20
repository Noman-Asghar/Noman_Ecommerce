import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const cards = useSelector((state) => state.cards.items)
    const handletoggleNav = () => {
        setMenu(!menu)
    }
    return (
        <header>
            <nav>
                <div className="md:hidden ps-2 w-full p-2 shadow-lg" onClick={handletoggleNav}><MdMenu className='w-10 h-10' /></div>
                <div className={`transition-all duration-600 ease-in-out overflow-hidden md:max-h-24 ${menu ? "max-h-80 opacity-100" : "max-h-0 opacity-0"} flex  flex-col  lg:opacity-100 justify-center  md:flex-row md:items-center w-full md:justify-around  shadow-2xl font-bold px-3 py-6 `}>
                    <div className="font-bold text-black md:text-medium lg:text-3xl hidden md:block">Noman <span className='text-orange-500 '>Asghar</span> <span className='text-[20px] relative bottom-6'>©</span></div>
                    <div>
                        <ul className='flex gap-4 items-center  flex-col text-[13px] md:text-[12px] lg:text-[18px]  md:flex-row text-gray-700'>
                            <li>
                                <NavLink to="/" className={({ isActive }) => `${isActive ? "text-orange-600" : "text-gray-700"}`} >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-orange-600" : "text-gray-700"}`} >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => `${isActive ? "text-orange-600" : "text-gray-700"}`} >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile" className={({ isActive }) => `${isActive ? "text-orange-600" : "text-gray-700"}`}>
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/products" className={({ isActive }) => `${isActive ? "text-orange-600" : "text-gray-700"}`}>
                                    Products
                                </NavLink>
                            </li>


                        </ul>
                    </div>

                    <div className="flex flex-col-reverse items-start justify-items-start justify-start">
                       <Link to="/cards" className='relative md:left-0 left-[45%]'>
                        <span  className='text-orange-600'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 9.75V6a4.5 4.5 0 00-9 0v3.75M3.75 9.75h16.5l-.792 9.114A2.25 2.25 0 0117.22 21H6.78a2.25 2.25 0 01-2.238-2.136L3.75 9.75z" />
                        </svg>
                        </span>
                       </Link>
                        <span className='text-white bg-red-600 px-2 rounded-full relative top-2 md:left-0 left-[45%] ms-2'>{cards?.length || 0}</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
