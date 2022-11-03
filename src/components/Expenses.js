// invoked from App.js comp
import React , {useState} from 'react';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
const [filteredYear, setFilteredYear] = useState('2020');
console.log('length of array '+props.items.length);



   const dropdownYearHandler =(selectedYear)=>{

    setFilteredYear(selectedYear);     
   
   }

   const filteredExpenses = props.items.filter(expense =>{
    console.log(expense,filteredYear);
    return expense.date.getFullYear().toString() == filteredYear;
   })

  //  let expensesContent = <p>No expenses found!</p>

  //  if(filteredExpenses.length > 0){
  //   expensesContent = filteredExpenses.map((expense)=>(
  //     <ExpenseItem1
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ))
  //  }

    return(
       <Card className="expenses">
      <ExpensesFilter dropdownYear ={dropdownYearHandler} selected ={filteredYear}></ExpensesFilter>
  
      <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
      
)
   
    
}

export default Expenses;