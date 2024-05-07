import React from 'react';
import LoginPage from './components/Auth/LoginPage';

const App: React.FC = () => {
  const handleGoogleLoginSuccess = (response: any) => {
    console.log('Login success:', response);
    // Handle login success logic (e.g., save user data to state)
  };

  const handleGoogleLoginFailure = (error: any) => {
    console.error('Login failure:', error);
    // Handle login failure logic (e.g., display error message)
  };

  return (
    <div>
      <h1>My Google Login App</h1>
      <LoginPage onSuccess={handleGoogleLoginSuccess} onFailure={handleGoogleLoginFailure} />
    </div>
  );
};

export default App;
