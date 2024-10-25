import React from 'react';
import { Home, BarChart2, FileText, Settings, X } from 'lucide-react';
import { UserRole } from '../../types/roles';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  userRole: UserRole;
}

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen, userRole }: SidebarProps) {
  return (
    <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex items-center justify-between p-4 border-b">
        <span className="text-xl font-semibold text-gray-800">GES Takip</span>
        <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
          <X className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      <nav className="mt-5">
        <div className="flex items-center px-4 py-2 text-gray-700 bg-gray-200">
          <Home className="h-5 w-5 mr-3" />
          <span>Genel Bakış</span>
        </div>
        <div className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
          <BarChart2 className="h-5 w-5 mr-3" />
          <span>İstatistikler</span>
        </div>
        <div className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
          <FileText className="h-5 w-5 mr-3" />
          <span>Raporlar</span>
        </div>
        <div className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
          <Settings className="h-5 w-5 mr-3" />
          <span>Ayarlar</span>
        </div>
      </nav>
    </aside>
  );
}