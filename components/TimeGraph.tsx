import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

function TimeGraph() {
  const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const data = {
    labels,
    datasets: [
      {
        label: "Time v Mood",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        backgroundColor: ["#ABC9FF", "#A6E191", "#FF8B8B"],
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Time v Mood",
      },
    },
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1 | 2,
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
      {/* <Bar options={options} data={data} /> */}
      <Line options={options} data={data} />
    </div>
  );
}

export default TimeGraph;
