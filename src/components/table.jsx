import React, { useState } from "react";

const Table = ({ expense, deleteTask, editTable }) => {
  // console.log(expense);

  return (
    <>
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
                        onClick={() => deleteTask(item.id)}
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
      </div>
    </>
  );
};
export default Table;
