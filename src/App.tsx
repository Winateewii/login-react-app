import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Router >
      <div className="min-h-screen bg-custom-dark items-center flex w-full justify-center bg-blue-200">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
