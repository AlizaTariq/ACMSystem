import React, { useEffect, useRef } from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  Tooltip,
} from "chart.js";

const LineGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    Chart.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineController,
      Tooltip
    );

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Not Assigned", "Pending", "Accepted", "Rejected"],
          datasets: [
            {
              label: "Practical Duty",
              data: [27, 14, 6, 1],
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
              fill: false,
            },
            {
              label: "Exam Duty",
              data: [0, 30, 16, 11],
              backgroundColor: "rgba(255, 99, 132, 0.5)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []);

  return <canvas ref={chartRef} />;
};

export default LineGraph;
