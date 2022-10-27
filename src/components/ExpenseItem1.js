 import Card from './Card';
 import ExpenseDate from './ExpenseDate';
 import ExpenseDetails from './ExpenseDetails';
 import './ExpenseItem.css';
function ExpenseItem1(props){
  
    
    const clickHandler=()=>{
        
        console.log('clicked!');
    }


    return (
      
        <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetails title={props.title} amount={props.amount} location={props.location}></ExpenseDetails>
        <button onClick={clickHandler}>Change title</button>
        </Card>
  
    )
}
export default ExpenseItem1;