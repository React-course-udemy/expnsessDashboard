import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../../css/ExpensesList.css";

const ExpensesList = ({ expensesList }) => {
  if (expensesList.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {expensesList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
