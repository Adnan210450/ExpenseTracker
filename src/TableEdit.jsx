import React, { useState ,useEffect} from 'react'

export const TableEdit = ({editExpense,expenseClose,selectedExpense,setExpenses,expenses}) => {
  console.log(selectedExpense,"edit data")
  const [editExpenseName,setEditExpenseName]=useState("");
  const [editExpenseDate,setEditExpenseDate]=useState("");
  const [editExpenseCategry,setEditExpenseCategry]=useState("");
  const[editExpenseAmount,setEditExpenseAmount]=useState("");

  useEffect(() => {
    if (selectedExpense) {
      setEditExpenseName(selectedExpense.expenseName || "");
      setEditExpenseDate(selectedExpense.Date || "");
      setEditExpenseCategry(selectedExpense.category||"");
      setEditExpenseAmount(selectedExpense.amount||"")
    }
  }, [selectedExpense]);

  const handleEdit=()=>{

    const updatedExpenses = [...expenses]
    
    const index = updatedExpenses.findIndex(v => v.id === selectedExpense.id)
    updatedExpenses[index] = {
      ...updatedExpenses[index],
      expenseName:editExpenseName ,
      Date:editExpenseDate,
      category:editExpenseCategry,
      amount:editExpenseAmount
    }

    // if(selectedExpense.id===expenses.id){
    setExpenses([...updatedExpenses]);

    setEditExpenseName("");
    setEditExpenseDate("");
    setEditExpenseCategry("");
    setEditExpenseAmount("")
    expenseClose()
  // }

    // console.log(expenses,"updated")
    // console.log("edit")
    // console.log("name",editExpenseName)
    // console.log("date",editExpenseDate)
    // console.log("catogry",editExpenseCategry)
    // console.log("amount",editExpenseAmount)
  }



  return (

    <> 
    { 
        editExpense?

        <div className="popup-expense">
          <h2 onClick={expenseClose}>X</h2>
          <h3>Add Expense</h3>
          <hr />

          <p>Expense Name</p>
          <input
            type="text"
            placeholder="Expense Name"
            value={editExpenseName}
            onChange={(e) => setEditExpenseName(e.target.value)}
          />

          <p>Date</p>
          <input
            id="expensedate"
            type="date"
            placeholder="dd-mm-yyyy"
            value={editExpenseDate}
            onChange={(e) => setEditExpenseDate(e.target.value)}
          />

          <p>Category</p>
          <select onChange={(e) => setEditExpenseCategry(e.target.value)} value={editExpenseCategry}>
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
            value={editExpenseAmount}
            onChange={(e) => setEditExpenseAmount(e.target.value)}/>
            <button onClick={handleEdit}>Add Expense</button>

          </div>:""
}
    </> 

  )     
}
  

export  default TableEdit;