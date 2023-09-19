import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./BarGraph.css";

Chart.register(...registerables);

const BarGraph = () => {
  const state = {
    labels: ["AAPL", "GOOGL", "MSFT", "AMZN", "TSLA"],
    datasets: [
      {
        label: "Stock Prices",
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: "rgba(219, 79, 79, 0.77)",
        borderWidth: 2,
        data: [150, 2750, 320, 3550, 750],
      },
    ],
  };

  return (
    <div className="bar-c " style={{ width: "500px", height: "400px" }}>
      <Bar
        className="canvas"
        data={state}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Class strength",
            fontSize: 40,
          },
          legend: {
            display: true,
            position: "right",
          },
          tooltips: {
            enabled: true, // Enable tooltips
          },
        }}
        // width={500}
        // height={300}
      />
    </div>
  );
};

export default BarGraph;
