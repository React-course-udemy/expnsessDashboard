import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const expenses =[{title: 'car insurance', amount: 294.76, date: new Date(2021, 2, 28)},
                   {title: 'life insurance', amount: 295.76, date: new Date(2021, 3, 28)}]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
      title={expenses[0].title}
      amount ={expenses[0].amount}
      date={expenses[0].date}></ExpenseItem>
      <ExpenseItem
      title={expenses[1].title}
      amount ={expenses[1].amount}
      date={expenses[1].date}></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
  }

export default App;
