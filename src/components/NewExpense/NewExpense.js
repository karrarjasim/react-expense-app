import React,{ useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const [openForm, setOpenForm] = useState(false);

  const openFormHandler = () => {
    setOpenForm(true);
  }

  const cancelFormHandler = () => {
    setOpenForm(false);
  }
  
  const onSaveExpenseDataHandeler = (enteredExpenseData) => {
      const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
      }
      setOpenForm(false);
      props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {!openForm ? <button onClick={openFormHandler}>Add new Expense</button> :
      <ExpenseForm onFormCancel={cancelFormHandler} onSaveExpenseData={onSaveExpenseDataHandeler} />}
    </div>
  );
};
export default NewExpense;
