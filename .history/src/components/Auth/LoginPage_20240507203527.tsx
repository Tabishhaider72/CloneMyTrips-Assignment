// src/components/Auth/LoginPage.tsx

import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { clientId } from '../../config'; // assuming you have a config file with the clientId

interface LoginPageProps {
  onSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
  onFailure: (error: any) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onSuccess, onFailure }) => {
  const handleGoogleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    onSuccess(response);
  };

  const handleGoogleLoginFailure = (error: any) => {
    onFailure(error);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <GoogleLogin
        clientId={clientId}
        buttonText="578394304769-g83v21jv24n5lrp5cpl7fue8ueggctqr.apps.googleusercontent.com"
        onSuccess={handleGoogleLoginSuccess}
        onFailure={handleGoogleLoginFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default LoginPage;
