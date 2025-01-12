import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styled from "styled-components";

const TotalSalesChartDiv = styled.div`
  background-color: ${(props) =>
    props.isDarkMode ? "rgba(28, 28, 28, 1)" : "#f7f9fb"};
  border-radius: 1rem;
  padding-bottom: 2.5rem;
  > canvas {
    background-color: ${(props) =>
      props.isDarkMode ? "rgba(28, 28, 28, 1)" : "#f7f9fb"};
    border-radius: 1rem;
    height: 100% !important;
    width: 12.5rem;
    padding: 0.5rem;
  }
`;

const TitleDiv = styled.div`
  padding: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  ${(props) => props.isDarkMode && "color: rgba(255, 255, 255, 1)"};
`;

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const TotalSalesChart = (props) => {
  const { isDarkMode } = props;
  const data = {
    labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
    datasets: [
      {
        label: "Revenue Sources",
        data: [300.56, 135.18, 154.02, 48.96],
        backgroundColor: ["#1C1C1C", "#BAEDBD", "#95A4FC", "#B1E3FF"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: $${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
    },
  };

  return (
    <TotalSalesChartDiv isDarkMode={isDarkMode}>
      <TitleDiv isDarkMode={isDarkMode}>Total Sales</TitleDiv>
      <Doughnut data={data} options={options} cutout="70%" />
    </TotalSalesChartDiv>
  );
};

export default TotalSalesChart;
