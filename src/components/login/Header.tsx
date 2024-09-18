import React from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';

const Header: React.FC = () => (
    <div className="flex flex-col items-center">
        <IoPersonCircleOutline size={100} className="text-blue-400" />
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Sign in</h2>
    </div>
);

export default Header
