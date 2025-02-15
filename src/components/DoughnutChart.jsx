import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ expense }) => {
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

  const data = {
    labels: ["Food & Drinks", "Groceries", "Travel", "Health"],
    datasets: [
      {
        data: [foodTotalAmount, groceriesTotalAmount, travelTotalAmount, healthTotalAmount],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
    },
  };

  return (
    <div className="DoughnutChart" style={{ width: "400px", margin: "0 auto" }}>
      <h3>Doughnut Chart</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
