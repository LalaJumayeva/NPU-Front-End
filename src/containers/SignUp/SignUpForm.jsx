import React, { useState } from 'react';

const SignupForm = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-grey-lighter flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <div className="mb-4 text-center">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile Preview"
                className="w-24 h-24 rounded-full mx-auto mb-2"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-2 flex items-center justify-center text-gray-400">
                <span>No Image</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#FFD502] file:text-black hover:file:bg-[#F7D009]"
            />
          </div>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-[#FFD502] text-black hover:bg-[#F7D009] focus:outline-none my-1"
          >
            Create Account
          </button>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?{' '}
          <a className="no-underline border-b border-blue text-custom-red" href="/login">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
