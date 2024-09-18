import React from 'react';

interface InputFieldProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ Icon, type, placeholder, value, onChange }) => (
  <div className="relative">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      <Icon className="text-gray-500" />
    </span>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full py-2 px-10 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    />
  </div>
);

export default InputField
