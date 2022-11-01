// invoked from App.js comp
import React , {useState} from 'react';
import './Expenses.css';
import ExpenseItem1 from './ExpenseItem1';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
const [filteredYear, setFilteredYear] = useState('2020');
// console.log('filtered yr before..'+ filteredYear);
console.log('length of array '+props.items.length);

  // const arrayOfObject =[];
  //  for(let i=0;i<props.items.length;i++){
  //    const items_=  <ExpenseItem1 key={props.items[i].id} title = {props.items[i].title} amount = {props.items[i].amount} date = {props.items[i].date} location = {props.items[i].location}></ExpenseItem1>;
  //    arrayOfObject.push(items_);
  // }

   const dropdownYearHandler =(selectedYear)=>{
   // console.log(selectedYear);
    setFilteredYear(selectedYear);        // setFilteredYear function behaves asynchronously
   // console.log('filtered yr after..'+ filteredYear);
   }

   const filteredExpenses = props.items.filter(expense =>{
    return new Date(expense.date).getFullYear().toString === filteredYear;
   })

    return(
      
      <Card className="expenses">
      <ExpensesFilter dropdownYear ={dropdownYearHandler} selected ={filteredYear}></ExpensesFilter>
      {/* {arrayOfObject} */}
      {filteredExpenses.map((expense)=>(
        <ExpenseItem1
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      </Card>
      
)
   
    
}

export default Expenses;