import React, { useState, useEffect } from 'react';
import { IoPersonSharp } from 'react-icons/io5';
import { FaLock } from 'react-icons/fa';
import Header from '../components/login/Header'
import InputField from "../components/login/InputField"
import ErrorMessage from "../components/login/ErrorMessage"
import LoginButton from "../components/login/LoginButton"
import Loading from '../components/utils/Loading';
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const { user, login, isLoading, setIsLoading } = useAuth()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loginError, setLoginError] = useState<{ userError?: string; passwordError?: string }>({})
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate('/dashboard')
        }
    }, [user, navigate])

    const handleLogin = async () => {

        setLoginError({ userError: '', passwordError: '' });

        const hasErrors = validateInputs();
        if (hasErrors) return;

        setIsLoading(true);
        try {
            const status = await login(username, password);
            handleLoginResponse(status);
        } catch (error) {
            toast.error('Error in processing', { position: 'top-right' });
        } finally {
            setUsername('')
            setPassword('')
            setIsLoading(false);
        }

    }

    const validateInputs = () => {
        let hasErrors = false;

        if (!username) {
            setLoginError((prev) => ({ ...prev, userError: 'User is required' }));
            hasErrors = true;
        }

        if (!password) {
            setLoginError((prev) => ({ ...prev, passwordError: 'Password is required' }));
            hasErrors = true;
        }

        return hasErrors;
    };

    const handleLoginResponse = (status: boolean) => {
        if (status) {
            toast.success('Login Successfully.', { position: 'top-right' });
            navigate('/dashboard');
        } else {
            toast.error('Invalid username or password', { position: 'top-right' });
        }
    };


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
            <ToastContainer />
            {isLoading && (
                <Loading />
            )}
        </div>
    )
}

export default LoginPage
