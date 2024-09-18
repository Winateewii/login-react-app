import React, { useState } from 'react';
import { IoPersonSharp } from 'react-icons/io5';
import { FaLock } from 'react-icons/fa';
import Header from '../components/login/Header'
import InputField from "../components/login/InputField"
import ErrorMessage from "../components/login/ErrorMessage"
import LoginButton from "../components/login/LoginButton"

const LoginPage = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loginError, setLoginError] = useState<{ userError?: string; passwordError?: string }>({})

    const handleLogin = async () => {

        setLoginError({ userError: '', passwordError: '' })
        if (username === "" || password === "") {
            if (username === "") {
                console.log('in this user name')
                setLoginError((prev) => ({ ...prev, userError: "User is required" }));
            }
            if (password === "") {
                setLoginError((prev) => ({ ...prev, passwordError: "Password is required" }));
            }
        }
    }

    return (
        <div className="max-w-xl">
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-blue-100 p-8 rounded-lg shadow-lg w-96">
                    <Header />

                    <div className="space-y-4">
                        <InputField
                            Icon={IoPersonSharp}
                            type="text"
                            placeholder="User Name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {loginError.userError && (
                            <ErrorMessage message={loginError.userError} />
                        )}

                        <InputField
                            Icon={FaLock}
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {loginError.passwordError && (
                            <ErrorMessage message={loginError.passwordError} />
                        )}

                        <LoginButton handleLogin={handleLogin} />
                    </div>
                </div>
            </div>
            {/* {isLoading && (
                <Loading />
            )} */}
        </div>
    )
}

export default LoginPage
