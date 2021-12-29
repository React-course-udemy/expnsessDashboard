
import Expenses from "./components/Expenses";

const App = () => {
  const expenses =[{title: 'car insurance', amount: 294.76, date: new Date(2021, 2, 28)},
    {title: 'life insurance', amount: 295.76, date: new Date(2021, 3, 28)}]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses list={expenses}></Expenses>
      
    </div>
  );
  }

export default App;
