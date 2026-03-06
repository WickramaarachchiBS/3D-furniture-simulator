import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Landing } from './pages/Landing';
import { Designer } from './pages/Designer';
import { AuthProvider, useAuth } from './store/AuthProvider';
import { StateProvider } from './store/StateProvider';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <StateProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/designer" element={
              <ProtectedRoute><Designer /></ProtectedRoute>
            } />
          </Routes>
        </StateProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}