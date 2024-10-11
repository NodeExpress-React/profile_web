import React, { useState } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  register: any;
  name: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, register, name }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value !== "");
  };

  return (
    <label className="relative w-full">
      <input
        {...register(name, { required: true })}
        type={type}
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <span className={`absolute left-3 inset-y-1/4 duration-200 text-gray-500 ${isFocused || hasValue ? "left-0 top-0 text-xs" : ""}`}>
        {placeholder}
      </span>
    </label>
  );
};

export default Input;
