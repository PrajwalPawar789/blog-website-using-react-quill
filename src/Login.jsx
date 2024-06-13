import React from 'react';
import { GoogleLogin } from 'react-google-login';

function Login() {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle the response, e.g., send it to your backend for authentication
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <GoogleLogin
              clientId="YOUR_CLIENT_ID"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              className="w-full flex items-center justify-center bg-blue-600 border border-transparent rounded-md py-2 px-4 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
