import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styled from "styled-components";

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProjectionChartDiv = styled.div`
  > canvas {
    background-color: ${(props) =>
      props.isDarkMode ? "rgba(28, 28, 28, 1)" : "#f7f9fb"};
    border-radius: 1rem;
    height: 16rem !important;
    width: 25rem;
    padding: 0.25rem;
  }
`;

const ProjectionChart = (props) => {
  const { isDarkMode } = props;
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Actuals",
        data: [15, 17, 15, 25, 8, 18],
        backgroundColor: "#A8C5DA",
      },
      {
        label: "Projections",
        data: [4, 3, 4, 5, 3, 4],
        backgroundColor: "lightblue",
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

  return (
    <ProjectionChartDiv isDarkMode={isDarkMode}>
      <Bar data={data} options={options} />
    </ProjectionChartDiv>
  );
};

export default ProjectionChart;
