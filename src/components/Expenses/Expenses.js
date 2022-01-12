import { useState } from "react";
import "../../css/Expenses.css";
import Card from "../UI/Card";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ list }) => {
  const [filteredData, setFilteredData] = useState("2020");

  const onSelectYearHandler = (year) => {
    setFilteredData(year);
  };

  const filteredExpenses = list.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredData;
  });

  return (
    <Card classes="expenses">
      <ExpenseFilter
        selected={filteredData}
        onSelectYear={onSelectYearHandler}
      />
      <ExpensesList expensesList={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
