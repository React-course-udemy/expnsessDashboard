import React from 'react';
import '../../css/NewExpense.css'
import ExpenseFormModal from './ExpenseFormModal';

const NewExpense = ({onAddExpense}) => {
    const saveExpenseDataHandler =(enteredExpenseData)=>{
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        onAddExpense(expenseData);
        }
    return (
        <div className="new-expense">
            <ExpenseFormModal onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;