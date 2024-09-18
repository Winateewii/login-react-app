import React from 'react';

interface LoginButtonProps {
    handleLogin: () => void
}

const LoginButton: React.FC<LoginButtonProps> = ({ handleLogin }) => (
    <button
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        onClick={handleLogin}
    >
        Login
    </button>
)

export default LoginButton;
