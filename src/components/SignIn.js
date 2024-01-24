import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();
    // Your sign-in logic here
    // ...

    // If sign-in is successful, you can redirect the user
    navigate('/dashboard');
  };

  const responseGoogle = (response) => {
    // Handle the Google response, and send the necessary data to your backend for sign-in
    console.log(response);
    // You can extract information like response.profileObj.email, response.profileObj.name, etc.
    // Then use this information to sign in or create a new account on your backend
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSignIn}>
        {/* Your email and password input fields */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded-md p-2 w-full"
            // Add necessary event handlers and state binding
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border rounded-md p-2 w-full"
            // Add necessary event handlers and state binding
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Sign In
        </button>
      </form>

      {/* Google Sign-in button */}
      <div className="mt-4">
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Sign In with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default SignIn;
