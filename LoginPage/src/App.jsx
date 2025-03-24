import { useState } from 'react'
import userImage from './assets/userImage.png'
import { HiEye, HiEyeOff } from 'react-icons/hi'

function App() {
  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleUserName = (e) => {
    setUserName(e.target.value);
  }

  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!passwordRegex.test(userPassword)) {
      alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
    } else {
      alert(`Thank you for your response`);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="border-3 border-gray-600 text-sky-400 text-center px-6 py-8 
                      rounded-2xl shadow-2xl justify-center items-center">
        <div className="flex justify-center mb-6">
          <img src={userImage} alt="userImage" className='w-32' />
        </div>
        <h1 className="text-4xl text-white mb-6 font-bold">Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-left">
            <label htmlFor="email" className="text-white text-lg">Enter Your Email:</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Email" 
              value={userName} 
              onChange={handleUserName} 
              className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg border 
                      border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          
          <div className="mb-6 text-left relative">
            <label htmlFor="password" className="text-white text-lg">Enter Your Password:</label>
            <input 
              type={showPassword ? 'text' : 'password'}
              // type='password'
              id="password" 
              placeholder="Password" 
              value={userPassword} 
              onChange={handleUserPassword} 
              className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg border 
                      border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <div>
            <button 
              type="button" 
              className="absolute text-sky-600 top-3/4 right-3 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)} 
            >
              {showPassword ? <HiEyeOff size={24} /> : <HiEye size={24} />} 
            </button>
            </div>
            
          </div>
          
          <button 
            type="submit" 
            className="w-full py-3 bg-sky-500 text-white rounded-lg
                    hover:bg-sky-600 focus:outline-none focus:ring-2 
                    focus:ring-sky-500 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
