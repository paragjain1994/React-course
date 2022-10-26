
import ExpenseItem1 from './components/ExpenseItem1';

function App() {
  const expenses = [           // array of object that is const expenses = [ {},{}.....]
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
  return (

    <div>
  <ExpenseItem1 title = {expenses[0].title} amount = {expenses[0].amount} date = {expenses[0].date} location = {expenses[0].location}></ExpenseItem1>
    <ExpenseItem1 title = {expenses[1].title} amount = {expenses[1].amount} date = {expenses[1].date} location = {expenses[1].location}></ExpenseItem1>
    <ExpenseItem1 title = {expenses[2].title} amount = {expenses[2].amount} date = {expenses[2].date} location = {expenses[2].location}></ExpenseItem1>
    
    </div>
  );
}

export default App;
