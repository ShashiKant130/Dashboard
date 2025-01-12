import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RevenueChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Actuals",
        data: [15, 17, 15, 25, 8, 18],
        borderColor: "black", // Line color
        fill: false, // Don't fill the area under the Actuals line
        tension: 0.1, // Smoothness of the line curve
      },
      {
        label: "Projections",
        data: [4, 3, 4, 5, 3, 4],
        borderColor: "#A8C5DA",
        fill: false, // Don't fill the area under the projections line
        tension: 0.1, // Smoothness of the line curve
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default RevenueChart;
