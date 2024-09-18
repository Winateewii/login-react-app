import React from 'react'

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
    <span className="text-red-500 text-sm">{message}</span>
);

export default ErrorMessage
