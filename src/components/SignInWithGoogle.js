import React from 'react';
import { GoogleLogin } from 'react-google-login';

const SignInWithGoogle = ({ onGoogleSignIn }) => {
  const responseGoogle = (response) => {
    // Handle the Google Sign-In response
    onGoogleSignIn(response);
  };

  return (
    <GoogleLogin
      clientId="357077052286-g46e1nqi5ngs5hv8he1q8dgsjp0o0it4.apps.googleusercontent.com"
      buttonText="Sign in with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default SignInWithGoogle;
