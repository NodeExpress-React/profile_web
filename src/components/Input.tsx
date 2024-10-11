import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  register: any;
  name: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, register, name }) => (
  <label>
    <input
      {...register(name, { required: true })}
      type={type}
      placeholder={placeholder}
      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none"
    />
  </label>
);

export default Input;
