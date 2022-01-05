import "../../css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <Card classes="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div> 
    </Card>
  );
};
export default ExpenseItem;
