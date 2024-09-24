import React, { useContext } from 'react'
import FormTemplate from '../components/FormTemplate'
import signupImg from "../assets/signup.png"
import { LoginContext } from '../context/LoginContext';

function SignUp() {
  const {setIsLoggedIn} = useContext(LoginContext);
  return (
    <div>
        <FormTemplate  
            title="Join the millions learning to code with StudyNotion for free"
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            formImage={signupImg}
            formType="signup"
            setIsLoggedIn={setIsLoggedIn}
        />
    </div>
  )
}

export default SignUp