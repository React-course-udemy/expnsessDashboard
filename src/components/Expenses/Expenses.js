import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../../css/Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = ({ list }) => {
  const [filteredData, setFilteredData] = useState("2020");

  const onSelectYearHandler = (year) => {
    setFilteredData(year);
    console.log(year);
  };
  return (
    <Card classes="expenses">
      <ExpenseFilter
        selected={filteredData}
        onSelectYear={onSelectYearHandler}
      />
      {list.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
