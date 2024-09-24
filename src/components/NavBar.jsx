import { Link, NavLink } from "react-router-dom"
import logo from '../assets/logo.svg'
import { useContext, useState } from "react"
import { LoginContext } from "../context/LoginContext"
import toast from "react-hot-toast"

function NavBar(){
    const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext)
    return(
        <header >
            <nav className="flex flex-wrap justify-between items-center mx-auto py-4 w-11/12">
                <Link to="/">
                    <img src={logo} className="mr-3 h-12" alt="Logo" />
                </Link>
                <div>
                    <ul className='text-richblack-100 flex gap-x-6'>
                        <li>
                            <NavLink to="#" className="hover:text-richblack-5 text-lg">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="hover:text-richblack-5 text-lg">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="hover:text-richblack-5 text-lg">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-x-4'>
                    {
                        !isLoggedIn &&
                            <Link to="login" >
                                <button className='bg-richblack-800 text-richblack-100 py-[8px] hover:text-richblack-5 px-[12px] rounded-[8px] border border-richblack-700 hover:border-richblack-5'>
                                    Log In
                                </button>
                            </Link>
                    }
                    {
                        !isLoggedIn &&
                            <Link to="signup">
                                <button className='bg-richblack-800 text-richblack-100 py-[8px] hover:text-richblack-5 px-[12px] rounded-[8px] border border-richblack-700 hover:border-richblack-5'>
                                    Sign Up
                                </button>
                            </Link>
                    }
                    {
                        isLoggedIn &&
                            <Link to="/">
                                <button onClick={() => {
                                    toast.success("Logged Out")
                                    setIsLoggedIn(false)
                                }} className='bg-richblack-800 text-richblack-100 py-[8px] hover:text-richblack-5 px-[12px] rounded-[8px] border border-richblack-700 hover:border-richblack-5'>
                                    Log Out
                                </button>
                            </Link>
                    }
                    {
                        isLoggedIn &&
                            <Link to="dashboard">
                                <button className='bg-richblack-800 text-richblack-100 py-[8px] hover:text-richblack-5 px-[12px] rounded-[8px] border border-richblack-700 hover:border-richblack-5'>
                                    Dashboard
                                </button>
                            </Link>
                    }
                    
                    

                </div>
            </nav>
        </header>
    )
}

export default NavBar