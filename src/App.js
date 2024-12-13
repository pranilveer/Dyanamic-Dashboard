import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import AnalyticsDashboard from './pages/AnalyticsDashboard/AnalyticsDashboard';
import LoginPage from './components/LoginPage/LoginPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;