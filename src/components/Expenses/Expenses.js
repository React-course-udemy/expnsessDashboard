import{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "../../css/Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = ({ list }) => {
  const [filteredData, setFilteredData] = useState('2020');
 
    const onSelectYearHandler = (year) => {
        setFilteredData(year);
        console.log(year);
    }
  return (
    
      
      <Card classes="expenses">
      <ExpenseFilter selected={filteredData} onSelectYear = {onSelectYearHandler}/> 
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
