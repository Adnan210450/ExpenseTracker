import { useState } from "react";

const ToggleExpense = ({ expenseToggle, handleExpenses, setExpenseToggle }) => {
  const [expenseDataName, setExpenseDataName] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const addExpense = () => {
    if (
      !expenseAmount ||
      !expenseDataName ||
      !expenseCategory ||
      !expenseDate
    ) {
      alert("All Details Required!");
      return;
    }
    const expenseObject = {
      id: Date.now(),
      expenseName: expenseDataName,
      Date: expenseDate,
      category: expenseCategory,
      amount: Number(expenseAmount),
    };

    handleExpenses(expenseObject);
    setExpenseToggle(false);
  };

  const expenseClose = () => {
    setExpenseToggle(false);
  };
  return (
    <>
      {expenseToggle ? (
        <div className="popup-expense">
          <h2 onClick={expenseClose}>X</h2>
          <h3>Add Expense</h3>
          <hr />

          <p>Expense Name</p>
          <input
            type="text"
            placeholder="Expense Name"
            onChange={(e) => setExpenseDataName(e.target.value)}
          />

          <p>Date</p>
          <input
            id="expensedate"
            type="date"
            placeholder="dd-mm-yyyy"
            onChange={(e) => setExpenseDate(e.target.value)}
          />

    
          <p>Category</p>
          <select onChange={(e) => setExpenseCategory(e.target.value)}>
            <option value="cateogry">Cateogry</option>
            <option value="food and drinks">food and drinks</option>
            <option value="Travel">Travel</option>
            <option value="Health">Health</option>
            <option value="Groceries">Groceries</option>
          </select>

          <p>Amount</p>
          <input
            type="number"
            placeholder="Amount"
            onChange={(e) => setExpenseAmount(e.target.value)}
          />

          <button onClick={addExpense}>Add Expense</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default ToggleExpense;
