import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => (
  <button
    type="submit"
    className="px-3 py-2 rounded-lg bg-sky-400 text-white font-bold hover:bg-sky-600 ease-in duration-300 focus:outline-none focus:bg-sky-600"
  >
    {text}
  </button>
);

export default Button;
