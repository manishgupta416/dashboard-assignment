import React from "react";
import { Doughnut } from "react-chartjs-2";

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
    responsive: false,
    maintainAspectRatio: false,
    height: 150,
    width: 300,
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;