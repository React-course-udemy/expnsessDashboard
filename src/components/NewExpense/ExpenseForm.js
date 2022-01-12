import React, { useState, useEffect } from "react";
import "../../css/ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [enteredTitle, setTitle] = useState(""),
    [enteredAmount, setAmount] = useState(""),
    [enteredDate, setEnteredDate] = useState("");

    useEffect(() => {
      console.log('comoponent did mount')
      return () => {
        console.log('component will unmount => trigger when unmount')
      }
    }, [])

    useEffect(() => {
      console.log('comoponent did mount and component did update when enteredTitle change')
    }, [enteredTitle])

    useEffect(() => {
      console.log('comoponent did mount and component did update on any change')
    })

  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);

    // setUserInput({...userInput,
    // title: e.target.value})

    // setUserInput((prevState)=>{
    //     return{ ...prevState, title:e.target.value}
    // })
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    // setUserInput({ ...userInput, amount: e.target.value });
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({ ...userInput, date: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);

    setTitle("");
    setAmount("");
    setEnteredDate("");
  };
  const cancelHandler =()=>{
    onCancel();
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
        
      </div>
    </form>
  );
};

export default ExpenseForm;
