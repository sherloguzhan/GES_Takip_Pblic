import React from 'react';



export default function UserActivityLog() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Kullanıcı Etkinlik Günlüğü</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Kullanıcının son etkinlikleri.</p>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          <li className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-700">Kullanıcı girişi yapıldı</p>
              <p className="text-sm text-gray-500">2 saat önce</p>
            </div>
          </li>
          <li className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-700">Profil güncellendi</p>
              <p className="text-sm text-gray-500">1 gün önce</p>
            </div>
          </li>
          <li className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-700">Yeni rapor oluşturuldu</p>
              <p className="text-sm text-gray-500">3 gün önce</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}