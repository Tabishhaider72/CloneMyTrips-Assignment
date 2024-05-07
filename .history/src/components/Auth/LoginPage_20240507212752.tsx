// src/components/Auth/LoginPage.tsx

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { clientId } from '../../config';

const LoginPage: React.FC = () => {
  const handleGoogleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log('Login success:', response);
    if ('profileObj' in response) {
      window.open(`/profile?name=${response.profileObj.name}&email=${response.profileObj.email}`, '_blank');
    }
  };

  const handleGoogleLoginFailure = (error: any) => {
    console.error('Login failure:', error);
    // Handle login failure logic (e.g., display error message)
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8, textAlign: 'center' }}>
        <Typography variant="h4">Login with Google</Typography>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
          cookiePolicy={'single_host_origin'}
        />
      </Box>
    </Container>
  );
};

export default LoginPage;
