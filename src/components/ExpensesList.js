// invoked from Expenses.js comp
import React from "react";

import ExpenseItem1 from "./ExpenseItem1";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem1
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}

      {props.items.length === 1 && (
        <h2 className="expenses-list__fallback">
          Only single Expense here. Please add more...
        </h2>
      )}
    </ul>
  );
};

export default ExpensesList;
