import React , {useState} from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

const DUMMY_EXPENSES = [           // array of object that is const expenses = [ {},{}.....]
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: 'Delhi',
  },
  { id: 'e2', 
  title: 'New TV', 
  amount: 799.49, 
  date: new Date(2021, 2, 12) ,
  location: 'Manali',
},
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: 'Mumbai',
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    location: 'Goa',
  }
];  
function App() {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  

const addExpenseHandler = (expense)=>{
  console.log(expense);
  const updatedExpense =[expense, ...expenses];
  setExpenses(updatedExpense);
}
  return (

    <div >
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>

    </div>
  );
}

export default App;
