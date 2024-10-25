import React, { useState } from 'react'

export default function UserDelete() {
  const [selectedUser, setSelectedUser] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Kullanıcı silme işlemi burada gerçekleştirilecek
    console.log('Kullanıcı silindi:', selectedUser)
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Kullanıcı Sil</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userSelect">
            Silinecek Kullanıcı
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userSelect"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            required
          >
            <option value="">Kullanıcı seçin</option>
            <option value="user1">Kullanıcı 1</option>
            <option value="user2">Kullanıcı 2</option>
            <option value="user3">Kullanıcı 3</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Kullanıcı Sil
          </button>
        </div>
      </form>
    </div>
  )
}