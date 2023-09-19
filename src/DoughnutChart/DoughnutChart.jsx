import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./DoughnutChart.css"; // Create a CSS file for styling

const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        data: [400, 300, 150, 100],
        backgroundColor: ["red", "blue", "yellow", "purple"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    height: 150,
    width: 300,
  };

  return (
    <div className="doughnut">
      <Doughnut className="doughnut-chart" data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
