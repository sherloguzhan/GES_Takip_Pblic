import React from 'react';
import UserList from './UserList';
import UserAdd from './UserAdd';
import UserEdit from './UserEdit';
import UserDelete from './UserDelete';
import UserRoles from './UserRoles';
import UserActivityLog from './UserActivityLog';
import UserBulkOperations from './UserBulkOperations';
import UserStatistics from './UserStatistics';

interface UserManagementProps {
  activeComponent: string;
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
}

export default function UserManagement({ activeComponent, setActiveComponent }: UserManagementProps) {
  const renderComponent = () => {
    switch (activeComponent) {
      case 'add':
        return <UserAdd />;
      case 'edit':
        return <UserEdit />;
      case 'delete':
        return <UserDelete />;
      case 'roles':
        return <UserRoles />;
      case 'activity':
        return <UserActivityLog />;
      case 'bulk':
        return <UserBulkOperations />;
      case 'statistics':
        return <UserStatistics />;
      default:
        return <UserList />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Kullanıcı Yönetimi</h1>
      {renderComponent()}
    </div>
  );
}