 import Card from './Card';
 import ExpenseDate from './ExpenseDate';
 import ExpenseDetails from './ExpenseDetails';
 import './ExpenseItem.css';
 import React , {useState} from 'react';
function ExpenseItem1(props){
  const [title,setTitle] = useState(props.title);
    
    const clickHandler=()=>{
        setTitle('Updated!');
        
        console.log('clicked!');
    }


    return (
      
        <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetails title={title} amount={props.amount} location={props.location}></ExpenseDetails>
        <button onClick={clickHandler}>Change title</button>
        </Card>
  
    )
}
export default ExpenseItem1;