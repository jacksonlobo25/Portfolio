import React from "react";
import Lottie from "lottie-react";
import CodingAnimation from '../assets/CodingAnimation.json';

const AccessDenied = () => {
  return (
    <div className="fixed inset-0 bg-black text-red-500 font-mono text-center flex flex-col items-center justify-center z-[9999] px-4">
      <div className="w-48 h-48 mb-6">
        <Lottie animationData={CodingAnimation} loop={true} />
      </div>
      <h1 className="text-4xl mb-4">🔒 Access Denied</h1>
      <p className="text-lg">You have entered a restricted command.</p>
      <p className="text-sm mt-2">Please wait 5 minutes before trying again.</p>
    </div>
  );
};

export default AccessDenied;
