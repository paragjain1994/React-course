
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

const arrayOfObject =[];
for(let i=0;i<expenses.length;i++){
  const items_=  <ExpenseItem1 title = {expenses[i].title} amount = {expenses[i].amount} date = {expenses[i].date} location = {expenses[i].location}></ExpenseItem1>;

  arrayOfObject.push(items_);
}
  return (

    <div>
{arrayOfObject}
    </div>
  );
}

export default App;
