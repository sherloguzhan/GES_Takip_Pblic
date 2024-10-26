import React from 'react';

export default function UserStatistics() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Kullanıcı İstatistikleri</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Kullanıcı verileri ve istatistikleri.</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Toplam Kullanıcı Sayısı</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">1000</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Aktif Kullanıcılar</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">850</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Bu Ay Yeni Katılan Kullanıcılar</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">50</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Ortalama Günlük Aktif Kullanıcı</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">500</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}