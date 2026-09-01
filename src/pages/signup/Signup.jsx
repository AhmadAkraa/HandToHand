import React from 'react';
import SignupForm from './components/SignupForm';

const Signup = () => {
  const cloudinaryBgUrl = "https://res.cloudinary.com/df7chxawb/image/upload/v1788279279/bglogin_rxjqb9.jpg";

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url('${cloudinaryBgUrl}')` }}>
      <div className="absolute inset-0 bg-sub/40"></div>
      <div className="relative z-10 w-full flex justify-center">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;