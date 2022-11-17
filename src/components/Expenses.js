// invoked from App.js comp
import React , {useState , useEffect} from 'react';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

function Expenses(props){
const [filteredYear, setFilteredYear] = useState('2020');
// console.log('length of array '+props.items.length);
useEffect(()=>{
   console.log('use effect')
   if (localStorage.getItem('filteredYear')) {
      setFilteredYear(localStorage.getItem('filteredYear'))
   }
},[])




   const dropdownYearHandler =(selectedYear)=>{

    setFilteredYear(selectedYear);     
    localStorage.setItem('filteredYear',selectedYear);
   
   }

   const filteredExpenses = props.items.filter(expense =>{
   // console.log(expense,filteredYear);
    return expense.date.getFullYear().toString() === filteredYear;
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
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
      
)
   
    
}

export default Expenses;