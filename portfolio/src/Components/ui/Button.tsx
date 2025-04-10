import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-[#1e1e1e] text-green-400 border border-green-600 px-6 py-2 rounded-lg font-mono text-sm hover:bg-green-900 hover:text-white transition-all duration-200 shadow-md active:scale-95"
    >
      {children}
    </button>
  );
};

export default Button;
