import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
const Expenses = props => {
    
    
    return (
        <div className="expenses">
            <ExpenseItem expenses={props.expenses[0]}/>
      <ExpenseItem expenses={props.expenses[1]}/>
        </div>
    );
};



export default Expenses;