import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './dashboard/Sidebar';
import UserManagementSidebar from './userManagement/UserManagementSidebar';
import Topbar from './dashboard/Topbar';
import DashboardContent from './dashboard/DashboardContent';
import UserManagement from './userManagement/UserManagement';
import { User, UserRole } from '../types/roles';

export default function DashboardOverview({ setIsAuthenticated }: { setIsAuthenticated: (value: boolean) => void }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>('User');
  const [showUserManagement, setShowUserManagement] = useState(false);
  const [activeUserManagementComponent, setActiveUserManagementComponent] = useState('list');
  const navigate = useNavigate();

  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user: User = JSON.parse(userString);
      setUserRole(user.rol);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/login');
  };

  const handleUserManagement = () => {
    setShowUserManagement(true);
    setIsProfileOpen(false);
  };

  const handleBackToDashboard = () => {
    setShowUserManagement(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {showUserManagement ? (
        <UserManagementSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          setActiveComponent={setActiveUserManagementComponent}
        />
      ) : (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          userRole={userRole}
        />
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar
          setIsSidebarOpen={setIsSidebarOpen}
          setIsProfileOpen={setIsProfileOpen}
          isProfileOpen={isProfileOpen}
          userRole={userRole}
          handleLogout={handleLogout}
          handleUserManagement={handleUserManagement}
          handleBackToDashboard={handleBackToDashboard}
          showUserManagement={showUserManagement}
        />
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          {showUserManagement && (userRole === 'Admin' || userRole === 'SuperAdmin') ? (
            <UserManagement 
              activeComponent={activeUserManagementComponent}
              setActiveComponent={setActiveUserManagementComponent}
            />
          ) : (
            <DashboardContent />
          )}
        </main>
      </div>
    </div>
  );
}