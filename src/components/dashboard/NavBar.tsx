import React from 'react';

interface NavBarProps {
    username: string;
    onLogout: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ username, onLogout }) => (
    <nav className="bg-white shadow-lg">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex-shrink-0 flex items-center">
                    <span className="text-xl font-bold text-gray-800">Dashboard</span>
                </div>
                <div className="flex items-center">
                    <span className="text-gray-600 mr-4">Welcome, {username}!</span>
                    <button
                        onClick={onLogout}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </nav>
)

export default NavBar;