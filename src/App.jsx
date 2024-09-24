import { useState } from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import { LoginProvider } from './context/LoginContext'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <LoginProvider value={{isLoggedIn, setIsLoggedIn}}>
     <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <NavBar/>
      <Outlet />
     </div>

    </LoginProvider>
  )
}

export default App
