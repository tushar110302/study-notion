import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

function LoginForm({setIsLoggedIn}) {
    const [formData, setFormData] = useState({email:"", password: ""})
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    function changeHandler(e){
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
  return (
    <form className="flex flex-col w-full gap-y-4 mt-6">
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input type='email' name='email' placeholder='example@test.xom' required value={formData.email} onChange={changeHandler} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
        </label>
        

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input type={showPassword ? "text" : 'password'} placeholder='G47VIAgu' required value={formData.password} onChange={changeHandler} name='password' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
            <span onClick={() => setShowPassword(prev => !prev)} className='absolute right-3 top-[38px] cursor-pointer'>
                {showPassword ?  <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />: <AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
            </span>
            <Link>
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>
            
        </label>

        <button onClick={(e) => {
            e.preventDefault();
            setIsLoggedIn(true)
            navigate("/dashboard")
            toast.success("Loggen in")
        }} className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Log in
        </button>
    </form>
  )
}

export default LoginForm