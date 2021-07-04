import React,{useState} from 'react';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_DATA = [
  {
    id: 'el0',
    title: "Car",
    amount: "60000",
    date: new Date(2021, 5, 12),
  },
  {
    id: 'el1',
    title: "Car",
    amount: "50000",
    date: new Date(2021, 6, 12),
  },
  {
    id: 'el2',
    title: "Laptop",
    amount: "1000",
    date: new Date(2020, 5, 12),
  },{
    id: 'el3',
    title: "Gaming chair",
    amount: "300",
    date: new Date(2019, 5, 12),
  },{
    id: 'el4',
    title: "Mouse pad",
    amount: "50",
    date: new Date(2019, 5, 12),
  }
];

const  App = () => {
  
  const [expenses,setExpenses] = useState(INITIAL_DATA);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
