import { useState } from 'react';
import userImage from './assets/userImage.png';
import { FaUser } from "react-icons/fa6";
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useForm } from '@tanstack/react-form';
import { useNavigate } from '@tanstack/react-router';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [hint, setHint] = useState([]);
  const hintArr = ['Weak', 'Fair', 'Good', 'Strong'];

  const navigate = useNavigate()

  const form = useForm({
    userName: "",
    password: "",
    onSubmit: (values) => {
      // alert(`Thank you for submitting the form !`)
      navigate({to:'/home'})

    },
  });

  const checkPasswordStrength = (password) => {
    let strength = 0;
    const hint = [];

    if (password.length >= 8) {
      strength++;
    }else {
      hint.push("Password should contain at least 8 characters.");
    }

    if (/[A-Z]/.test(password)) {
      strength++
    }else{
       hint.push("Password must contain at least one uppercase letter.");
      }

    if (/[a-z]/.test(password)) {
      strength++;
    }else {
      hint.push("Password must contain at least one lowercase letter.");
    }

    if (/\d/.test(password)) {
      strength++;
    }else {
      hint.push("Password must contain at least one number.");
    }

    if (/[@$!%*?&]/.test(password)) {
      strength++;
    }else {
      hint.push("Password must contain at least one special character.");
    }
    setPasswordStrength(strength);
    setHint(hint);
  };

  

  return (
    <div className="min-h-screen flex justify-center items-center  ">
      <div className="border-3 border-gray-600 text-sky-400 text-center px-6 py-8 
                      rounded-2xl shadow-2xl justify-center items-center min-w-sm">
        <div className="flex justify-center mb-6">
          <img src={userImage} alt="userImage" className='w-24' />
        </div>
        <h1 className="text-4xl text-white mb-6 font-bold">Login Form</h1>

        <form onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}>

        <div className="mb-6 text-left relative min-w-full">
          <form.Field
            name="userName"
            validators={{
              onChange: ({ value }) => {
                if (!emailRegex.test(value)) {
                  return 'Please enter a valid email';
                }
              },
            }}
            children={(field) => (
              <>
                <label htmlFor="email" className="text-white text-lg">
                  Enter Your Email:
                </label>
                
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg border 
                            border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  <button
                    type="button"
                    className="absolute text-sky-600 top-1/2 right-3 transform -translate-y-1/2"
                  >
                    <FaUser size={20} />
                  </button>
                </div>

                <div className="text-red-400 mt-2">
                  {field.state.meta.errors ? (
                    <em role="alert">{field.state.meta.errors.join(', ')}</em>
                  ) : null}
                </div>
              </>
            )}
          />
        </div>


          <div className="mb-6 text-left relative min-w-full">
            <form.Field
              name="password"
              validators={{
                onSubmit: ({ value }) => {
                  return !passwordRegex.test(value) ? `Enter a valid password` : null;
                },
              }}
              children={(field) => (
                <>
                  <label htmlFor="password" className="text-white text-lg">
                    Enter Your Password:
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="Password"
                      value={field.state.value}
                      name={field.name}
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                        checkPasswordStrength(e.target.value);
                      }}
                      className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg border 
                                border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <button
                      type="button"
                      className="absolute text-sky-600 top-3/5 right-3 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <HiEyeOff size={24} /> : <HiEye size={24} />}
                    </button>
                  </div>

                  <div className="text-red-400 mt-2">
                    {field.state.meta.errors ? (
                      <em role="alert">{field.state.meta.errors.join(', ')}</em>
                    ) : null}
                  </div>

                  <ul className="list-disc pl-5 text-red-700 mt-4">
                    {hint.length > 0 ? (
                      hint.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))
                    ) : (
                      <></>
                    )}
                  </ul>

                  <div className="mt-4">
                    <div className="h-2 w-full bg-gray-300 rounded-lg">
                      <div
                        className={`h-full rounded-lg ${
                          passwordStrength === 5
                            ? 'bg-green-500'
                            : passwordStrength >= 3
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                        }`}
                        style={{ width: `${(passwordStrength / 5) * 100}%` }}
                      ></div>
                    </div>
                    <p className="mt-2 text-white">
                      {hintArr[passwordStrength - 1] }
                    </p>
                  </div>

                </>
              )}
            />
          </div>

          <button
            type="submit"
            className="font-bold text-xl w-full py-3 bg-sky-500 text-white rounded-lg
                    hover:bg-sky-600 focus:outline-none focus:ring-2 
                    focus:ring-sky-500 transition-all duration-300"
          >
            Log in
          </button>
        </form>
      </div>
      
    </div>
  );
}

export default App;
