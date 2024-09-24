import React, { useContext } from 'react'
import FormTemplate from '../components/FormTemplate'
import loginImg from "../assets/login.png"
import { LoginContext } from '../context/LoginContext';

function Login() {
  const {setIsLoggedIn} = useContext(LoginContext);
  return (
    <div>
        <FormTemplate 
            title="Welcome Back"
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            formImage={loginImg}
            formType="login"
            setIsLoggedIn={setIsLoggedIn}
        />
    </div>
  )
}

export default Login