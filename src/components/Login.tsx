import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoPersonCircleOutline, IoPersonSharp } from "react-icons/io5"
import { FaLock } from "react-icons/fa"

import { getUserData } from '../services/mockService'

const Login: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState({ userError: '', passwordError: '' })
    const navigate = useNavigate()

    const handleLogin = (e: React.FormEvent) => {

        setLoginError({ userError: '', passwordError: '' });
        console.log('username---->', username, 'password')
        if (username === "" || password === "") {
            if (username === "") {
                console.log('in this user name')
                setLoginError((prev) => ({ ...prev, userError: "User is required" }));
            }

            if (password === "") {
                setLoginError((prev) => ({ ...prev, passwordError: "Password is required" }));
            }
            console.log('-----', loginError)
            return
        }


        // toast.success("Logged in successfully!")
        // e.preventDefault()
        // const user = users.find(u => u.username === username && u.password === password);
        // const user = true
        // if (user) {
        //     localStorage.setItem('user', JSON.stringify(user));
        //     navigate('/dashboard')
        // } else {
        //     // setError('Invalid username or password');
        // }
    };

    return (
        // <div className="min-h-screen flex items-center justify-center bg-gray-100">
        //     <div className="bg-white p-8 rounded-lg shadow-md w-96">
        //         <h2 className="text-2xl font-bold mb-4">Login</h2>
        //         <form onSubmit={handleLogin}>
        //             <div className="mb-4">
        //                 <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
        //                 <input
        //                     type="text"
        //                     id="username"
        //                     value={username}
        //                     onChange={(e) => setUsername(e.target.value)}
        //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        //                     required
        //                 />
        //             </div>
        //             <div className="mb-4">
        //                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        //                 <input
        //                     type="password"
        //                     id="password"
        //                     value={password}
        //                     onChange={(e) => setPassword(e.target.value)}
        //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        //                     required
        //                 />
        //             </div>
        //             {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        //             <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
        //                 Login
        //             </button>
        //         </form>
        //     </div>
        // </div>
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-blue-100 p-8 rounded-lg shadow-lg w-96">
                <div className="flex flex-col items-center">
                    <IoPersonCircleOutline size={100} className="text-blue-400" />
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900">Sign in</h2>
                </div>

                <div className="space-y-4">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <IoPersonSharp className="text-gray-500" />
                        </span>
                        <input
                            type="text"
                            placeholder="User Name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full py-2 px-10 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    {loginError.userError && (<span className="text-red-500 text-sm"> {loginError.userError} </span>)}

                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaLock className="text-gray-500" />
                        </span>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full py-2 px-10 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    {loginError.passwordError && (<span className="text-red-500 text-sm"> {loginError.passwordError} </span>)}

                    <button
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Login;