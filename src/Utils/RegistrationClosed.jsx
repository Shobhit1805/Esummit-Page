import React from 'react';

const RegistrationClosed = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <img
        src="/assets/ES/Events/RegistrationClosed.png" 
        alt="Registration Closed"
        className="w-64 h-auto"
      />
      <p className="text-red-600 font-semibold mt-2 text-xl">Registration is closed</p>
    </div>
  );
};

export default RegistrationClosed;
