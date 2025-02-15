import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

// Register components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Barchart = ({expense}) => {
  const [foodTotalAmount, setFoodTotalAmount] = useState(null);
    const [groceriesTotalAmount, setGroceriesTotalAmount] = useState(null);
    const [travelTotalAmount, setTravelTotalAmount] = useState(null);
    const [healthTotalAmount, sethealthTotalAmount] = useState(null);
  
  
    useEffect(() => {
      const foodCategory = expense
        .filter((transaction) => transaction.category === "food and drinks")
        .reduce((acc, item) => {
          return acc + item.amount;
        }, 0);
  
      const groceriesCategory = expense
        .filter((transaction) => transaction.category === "Groceries")
        .reduce((acc, item) => {
          return acc + item.amount;
        }, 0);
  
      const travelCategory = expense
        .filter((transaction) => transaction.category === "Travel")
        .reduce((acc, item) => {
          return acc + item.amount;
        }, 0);
  
      const healthCategory = expense
        .filter((transaction) => transaction.category === "Health")
        .reduce((acc, item) => {
          return acc + item.amount;
        }, 0);
  
      setFoodTotalAmount(foodCategory);
      setGroceriesTotalAmount(groceriesCategory);
      setTravelTotalAmount(travelCategory);
      sethealthTotalAmount(healthCategory);
    }, [expense]);

  const labels = ["Food & Drinks", "Groceries", "Travel", "Health" ]

  const data = {
    labels,
    datasets: [
      {
        label: "Category",
        data: [foodTotalAmount, groceriesTotalAmount, travelTotalAmount, healthTotalAmount,],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div style={{ width: "600px", margin: "0 auto", overflow: "hidden" }}>
      <h2>Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Barchart;
