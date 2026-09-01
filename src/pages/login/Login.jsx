import React from 'react';
import LoginForm from './components/LoginForm';

const Login = () => {
  const backgroundImageUrl = "https://res.cloudinary.com/df7chxawb/image/upload/v1788279279/bglogin_rxjqb9.jpg";
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-bottom bg-no-repeat relative" style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 w-full flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;