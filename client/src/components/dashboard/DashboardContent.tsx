import React from 'react';
import { BarChart2, Users, FileText } from 'lucide-react';
import StatisticsCard from './StatisticsCard';

export default function DashboardContent() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Genel Bakış</h1>
      
      {/* Genel İstatistikler */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatisticsCard title="Aktif Projeler" value={4} icon={BarChart2} color="bg-blue-500" />
        <StatisticsCard title="Toplam Kurulu Güç" value="31798 MW" icon={BarChart2} color="bg-green-500" />
        <StatisticsCard title="Toplam Çalışan" value={14} icon={Users} color="bg-yellow-500" />
        <StatisticsCard title="Açık Görevler" value={28} icon={FileText} color="bg-pink-500" />
      </div>
      
      {/* Proje Listesi */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Aktif Projeler</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8 rounded-full" src="/placeholder.svg?height=32&width=32" alt="Proje logo" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Arta GES
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    Delice / Yozgat
                  </p>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    10000 MW
                  </span>
                </div>
              </div>
            </li>
            {/* Diğer projeler buraya eklenebilir */}
          </ul>
        </div>
      </div>
    </div>
  );
}