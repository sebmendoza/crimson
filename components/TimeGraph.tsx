import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import{ faker } from '@faker-js/faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function TimeGraph() {
    const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const data = {
    labels,
    datasets: [
      {
        label: 'Time v Mood',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        backgroundColor: 'rgb(255, 99, 132)',
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Time v Mood',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  )
}

export default TimeGraph
