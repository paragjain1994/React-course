// invoked from App.js comp
import React , {useState} from 'react';
import './Expenses.css';
import ExpenseItem1 from './ExpenseItem1';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
const [filteredYear, setFilteredYear] = useState('2020');
console.log('filtered yr before..'+ filteredYear);
console.log(props.items.length);

  const arrayOfObject =[];
   for(let i=0;i<props.items.length;i++){
     const items_=  <ExpenseItem1 title = {props.items[i].title} amount = {props.items[i].amount} date = {props.items[i].date} location = {props.items[i].location}></ExpenseItem1>;

     arrayOfObject.push(items_);
   }

   const dropdownYearHandler =(selectedYear)=>{
    console.log(selectedYear);
    setFilteredYear(selectedYear);        // setFilteredYear function behaves asynchronously
    console.log('filtered yr after..'+ filteredYear);
   }

    return(
      <div>
      <Card className="expenses">
      <ExpensesFilter dropdownYear ={dropdownYearHandler} selected ={filteredYear}></ExpensesFilter>
      {arrayOfObject}
      </Card>
      </div>
)
   
    
}

export default Expenses;