// src/pages/AnalyticsDashboard.js
import React, { useEffect, useState } from 'react';
import OverviewCards from '../../components/OverviewCards/OverviewCards';
import LineChart from '../../components/LineChart/LineChart';
import PieChart from '../../components/PieChart/PieChart';
import BarChart from '../../components/BarChart/BarChart';
import './AnalyticsDashboard.css';

function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    fetch('/mock/analytics.json') // Mock analytics data
      .then((res) => res.json())
      .then((data) => setAnalytics(data));
  }, []);

  if (!analytics) return <p>Loading...</p>;

  return (
    <div className="analytics-dashboard">
      <OverviewCards metrics={analytics.metrics} />
      <div className="charts">
        <LineChart data={analytics.registrationTrend} />
        <PieChart data={analytics.activeInactive} />
        <BarChart data={analytics.usersByRegion} />
      </div>
    </div>
  );
}

export default AnalyticsDashboard;
