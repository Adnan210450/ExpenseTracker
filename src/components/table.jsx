import React, { useState } from "react";

const Table = ({ expense, editTable ,expenses,setDeleteToggle,setDeleteData}) => {
  // console.log(expense);

  const handleDelete = (expense) => {
    console.log(setDeleteData(expense),"1111111111")//SLECTED DATA IS UNDEFINED
    setDeleteToggle(true)
  }

  return (
    <>
    {
      expenses?
      <div className="table-container">
        <table style={{ width: "100vw" }}>
          <thead id="tablehead">
            <tr>
              <th>Sr</th>
              <th>Expense</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody id="tablebody">
            {expense.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.expenseName}</td>
                  <td>{item.amount}</td>
                  <td>{item.category}</td>
                  <td>
                    <div>
                      <button
                        className="buttonedit"
                        onClick={() => editTable(item)}
                      >
                        edit
                      </button>
                      <button
                        className="buttonedit"
                        onClick={()=>handleDelete(item)}
                      >
                        delete            
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>:""
    }
      
      
    </>
  );
};
export default Table;
