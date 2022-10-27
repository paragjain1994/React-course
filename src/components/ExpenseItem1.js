 // invoked from Expenses.js component
 import Card from './Card';
 import ExpenseDate from './ExpenseDate';
 import ExpenseDetails from './ExpenseDetails';
 import './ExpenseItem.css';
 import React , {useState} from 'react';


function ExpenseItem1(props){
  console.log('ExpenseItem1 evaluated by React');
  const [title,setTitle] = useState(props.title);
  const [amount,setAmount] = useState(props.amount);
    
    const clickHandler1=()=>{
        setTitle('Updated!');
        
        console.log('clicked!');
    }
    const clickHandler2=()=>{
        setAmount(100);
        
        console.log('clicked!');
    }

    return (
      
        <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetails title={title} amount={amount} location={props.location}></ExpenseDetails>
        <button onClick={clickHandler1}>Change title</button>
        <button onClick={clickHandler2}>Change amount</button>
        </Card>
  
    )
}
export default ExpenseItem1;