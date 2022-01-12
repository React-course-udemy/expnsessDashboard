import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const ExpenseFormModal = ({onSaveExpenseData}) => {
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  
  const showForm = () => {
    setShowExpenseModal(true);
  };
  const hideForm = () => {
    setShowExpenseModal(false);
  };

  return (
    <div>
      {showExpenseModal ? (
        <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancel={hideForm} />
      ) : (
        <button onClick={showForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default ExpenseFormModal;
