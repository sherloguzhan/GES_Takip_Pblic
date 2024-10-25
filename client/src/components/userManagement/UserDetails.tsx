import React from 'react';
import { X, UserPlus, UserMinus, UserCog, Users, Shield, Activity, Database, BarChart2 } from 'lucide-react';

interface UserManagementSidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  setActiveComponent: (component: string) => void;
}

export default function UserManagementSidebar({ 
  isSidebarOpen, 
  setIsSidebarOpen, 
  setActiveComponent 
}: UserManagementSidebarProps) {
  return (
    <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex items-center justify-between p-4 border-b">
        <span className="text-xl font-semibold text-gray-800">Kullanıcı Yönetimi</span>
        <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
          <X className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      <nav className="mt-5">
        <button
          onClick={() => setActiveComponent('list')}
          className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100"
        >
          <Users className="h-5 w-5 mr-3" />
          <span>Kullanıcı Listesi</span>
        </button>
        <button
          onClick={() => setActiveComponent('add')}
          className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100"
        >
          <UserPlus className="h-5 w-5 mr-3" />
          <span>Kullanıcı Ekle</span>
        </button>
        <button
          onClick={() => setActiveComponent('edit')}
          className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100"
        >
          <UserCog className="h-5 w-5 mr-3" />
          <span>Kullanıcı Güncelle</span>
        </button>
        <button
          onClick={() => setActiveComponent('delete')}
          className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100"
        >
          <UserMinus className="h-5 w-5 mr-3" />
          <span>Kullanıcı Sil</span>
        </button>
        <button
          onClick={() => setActiveComponent('roles')}
          className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100"
        >
          <Shield className="h-5 w-5 mr-3" />
          <span>Kullanıcı Rolleri</span>
        </button>
        <button
          onClick={() => setActiveComponent('activity')}
          className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100"
        >
          <Activity className="h-5 w-5 mr-3" />
          <span>Etkinlik Günlüğü</span>
        </button>
        <button
          onClick={() => setActiveComponent('bulk')}
          className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100"
        >
          <Database className="h-5 w-5 mr-3" />
          <span>Toplu İşlemler</span>
        </button>
        <button
          onClick={() => setActiveComponent('statistics')}
          className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100"
        >
          <BarChart2 className="h-5 w-5 mr-3" />
          <span>İstatistikler</span>
        </button>
      </nav>
    </aside>
  );
}