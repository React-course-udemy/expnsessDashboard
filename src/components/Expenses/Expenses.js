import ExpenseItem from "./ExpenseItem";
import "../../css/Expenses.css";
import Card from "../UI/Card";

const Expenses = ({ list }) => {
  return (
    <Card classes="expenses">
      <ExpenseItem
        title={list[0].title}
        amount={list[0].amount}
        date={list[0].date}
      />
      <ExpenseItem
        title={list[1].title}
        amount={list[1].amount}
        date={list[1].date}
      />
      <ExpenseItem
        title={list[2].title}
        amount={list[2].amount}
        date={list[2].date}
      />
      <ExpenseItem
        title={list[3].title}
        amount={list[3].amount}
        date={list[3].date}
      />
    </Card>
    
  );
};

export default Expenses;
