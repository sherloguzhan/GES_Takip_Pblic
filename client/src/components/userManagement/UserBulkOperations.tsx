import React from 'react';

export default function UserBulkOperations() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Toplu Kullanıcı İşlemleri</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Birden fazla kullanıcı için işlem yapın.</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="bulk-action" className="block text-sm font-medium text-gray-700">İşlem Seçin</label>
            <select id="bulk-action" name="bulk-action" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>Toplu Sil</option>
              <option>Rol Değiştir</option>
              <option>Durum Güncelle</option>
            </select>
          </div>
          <div>
            <label htmlFor="user-selection" className="block text-sm font-medium text-gray-700">Kullanıcıları Seçin</label>
            <select id="user-selection" name="user-selection" multiple className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>Kullanıcı 1</option>
              <option>Kullanıcı 2</option>
              <option>Kullanıcı 3</option>
            </select>
          </div>
        </div>
        <div className="mt-5">
          <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            İşlemi Uygula
          </button>
        </div>
      </div>
    </div>
  );
}