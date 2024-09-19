import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import PrivateRoute from './components/auth/PrivateRoute'
import Dashboard from './components/dashboard/Dashboard'
import { AuthProvider } from './contexts/AuthContext'
function App() {
  return (
    <AuthProvider>
      <Router >
        <div className="min-h-screen bg-custom-dark items-center flex w-full justify-center bg-blue-200">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="*" element={<PrivateRoute element={<NotFoundPage />} />} />
          </Routes>
        </div>
      </Router >
    </AuthProvider>
  );
}

export default App;
