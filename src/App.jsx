import "./App.css";
import Navbar from "./components/navbar";
import Card from "./components/Card";
import Button from "./components/button";
import Table from "./components/table";
import Toggle from "./components/toggle";
import budgeticon from "./assets/budgeticon.svg";
import expenseicon from "./assets/totalexpenseicon.svg";
import ToggleExpense from "./components/ToggleExpense";

import TableEdit from "./TableEdit";
import { useEffect, useState } from "react";
import Barchart from "./Barchart.Jsx";
import DoughnutChart from "./components/DoughnutChart";

function App() {
  const [totalBudget, setTotalBudget] = useState(0);
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [filterCategory, setFilteredCategory] = useState("All");
  const [editExpense, setEditExpense] = useState(false);
  const [searchData, setSearchData] = useState("");

  const handleSearch = (query) => {
    setSearchData(query.toLowerCase());
  };

  const handleCategoryFilter = (category) => {
    console.log("222");
    setFilteredCategory(category);
    console.log("111");
  };

  const filterExpense =
    filterCategory === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === filterCategory);

  const searchFilteredExpenses = filterExpense.filter((expense) =>
    expense.expenseName.toLowerCase().includes(searchData)
  );

  const [editdata, setEditData] = useState(null);
  const editTable = (expense) => {
    console.log("hiii");
    setEditExpense(true);
    setEditData(expense);
  };

  useEffect(() => {
    console.log(editdata);
  }, [editdata]);

  const expenseClose = () => {
    console.log("////////");
    setEditExpense(false);
  };

  const handleExpenses = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };
  console.log({ expenses })

  useEffect(() => {
    const totalAmount = expenses.reduce(
      (accumulator, expense) => accumulator + expense.amount,
      0
    );
    setExpenseAmount(totalAmount);
  }, [expenses]);

  const handleDelete = (id) => {
    console.log("first", id);
    const filteredData = expenses.filter((expense) => expense.id !== id);
    console.log(filteredData, "delete data");
    setExpenses(filteredData);
  };

  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Card name={"your budget"} amount={totalBudget} image={budgeticon} />
        <Card
          name={"your expense"}
          amount={expenseAmount}
          image={expenseicon}
        />
        <Card name={"Remaining budget"} amount={totalBudget - expenseAmount} />
      </div>
      <Button
        handleSearch={handleSearch}
        setTotalBudget={setTotalBudget}
        handleExpenses={handleExpenses}
        handleCategoryFilter={handleCategoryFilter}
      />

      <div style={{ display: "flex", marginTop: "50px" }}>
        <DoughnutChart expense={searchFilteredExpenses} />
        <Barchart expense={searchFilteredExpenses}/>
      </div>

      <Table
        expense={searchFilteredExpenses}
        deleteTask={handleDelete}
        editTable={editTable}
      />
      <TableEdit
        editExpense={editExpense}
        expenseClose={expenseClose}
        selectedExpense={editdata}
        setExpenses={setExpenses}
        expenses={expenses}
      />
    </>
  );
}

export default App;
