import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../../utils/storage'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_BE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        saveToken(data.token);
        navigate('/')
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="bg-grey-lighter flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-[#FFD502] text-black hover:bg-[#F7D009] focus:outline-none my-1"
            >
              Login
            </button>
          </form>
        </div>

        <div className="text-grey-dark mt-6">
          Don't have an account?{' '}
          <a className="no-underline border-b border-blue text-custom-red" href="/signup">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
