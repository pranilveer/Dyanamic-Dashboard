// src/components/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'User Registrations',
        data: data.values,
        fill: false,
        borderColor: '#007BFF',
      },
    ],
  };

  return <Line data={chartData} />;
}

export default LineChart;
