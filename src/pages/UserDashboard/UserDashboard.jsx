// src/pages/UserDashboard.js
import React, { useEffect, useState } from 'react';
import UserTable from '../../components/UserTable/UserTable';
import './UserDashboard.css';

function UserDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/mock/users.json')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="dashboard">
      <h2>User Management</h2>
      <UserTable users={users} />
    </div>
  );
}

export default UserDashboard;