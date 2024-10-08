import React from "react";

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ id, type, placeholder }) => (
  <label htmlFor={id}>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none"
    />
  </label>
);

export default Input;
