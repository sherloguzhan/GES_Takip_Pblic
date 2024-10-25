import React, { useState, useEffect, ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import DashboardOverview from './components/DashboardOverview';

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps): JSX.Element {
  const isAuthenticated = localStorage.getItem('user') !== null && localStorage.getItem('user') !== 'undefined';
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const user = localStorage.getItem('user');
      setIsAuthenticated(user !== null && user !== 'undefined');
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/login" 
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginScreen setIsAuthenticated={setIsAuthenticated} />} 
          />
          <Route 
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardOverview setIsAuthenticated={setIsAuthenticated} />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/" 
            element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;