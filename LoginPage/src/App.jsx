import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userName, setuserName] = useState();
  const [userPassword, setUserPassword] = useState()
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleUserName = (e) => {
    setuserName(e.target.value)
  }

  const handleUserPassword = (e) => {
    setUserPassword(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!passwordRegex.test(userPassword)) {
      alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.')
    }
    else{ 
      alert(``)
    }
  }

  return (
    <>
      <div className='flex justify-center '>
        <div className='border-1 text-sky-400 text-center px-4 mt-16 rounded-2xl' >
            <h1 className='text-3xl mt-8'>Login Form</h1>
          <div>
            <form onSubmit={handleSubmit} className=''>
              <label >Enter Your Email: 
                <input 
                  type="email" 
                  placeholder='Email' 
                  value={userName} onChange={handleUserName} 
                  className='text-blue-200'/>
              </label>
              <br />
              <label >Enter your Password:
                <input 
                  type="password" 
                  placeholder='Password' 
                  value={userPassword} 
                  onChange={handleUserPassword} />
              </label>
              <br />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
