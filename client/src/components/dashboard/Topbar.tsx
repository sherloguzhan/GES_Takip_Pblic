import React from 'react';
import { Menu, Bell, Search, ArrowLeft } from 'lucide-react';
import { UserRole } from '../../types/roles';

interface TopbarProps {
  setIsSidebarOpen: (isOpen: boolean) => void;
  setIsProfileOpen: (isOpen: boolean) => void;
  isProfileOpen: boolean;
  userRole: UserRole;
  handleLogout: () => void;
  handleUserManagement: () => void;
  handleBackToDashboard: () => void;
  showUserManagement: boolean;
}

export default function Topbar({
  setIsSidebarOpen,
  setIsProfileOpen,
  isProfileOpen,
  userRole,
  handleLogout,
  handleUserManagement,
  handleBackToDashboard,
  showUserManagement
}: TopbarProps) {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {showUserManagement ? (
            <button onClick={handleBackToDashboard} className="text-gray-500 focus:outline-none focus:ring">
              <ArrowLeft className="h-6 w-6" />
            </button>
          ) : (
            <button onClick={() => setIsSidebarOpen(true)} className="text-gray-500 focus:outline-none focus:ring lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
          )}
          <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">Ara</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input id="search" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Proje ara" type="search" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span className="sr-only">Bildirimler</span>
              <Bell className="h-6 w-6" />
            </button>
            <div className="ml-3 relative">
              <div>
                <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" id="user-menu" aria-haspopup="true">
                  <span className="sr-only">Kullanıcı menüsünü aç</span>
                  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </button>
              </div>
              {isProfileOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  {(userRole === 'Admin' || userRole === 'SuperAdmin') && !showUserManagement && (
                    <button onClick={handleUserManagement} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Kullanıcı Yönetimi</button>
                  )}
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Ayarlar</button>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Çıkış Yap</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}