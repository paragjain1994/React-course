import './Expenses.css';
import ExpenseItem1 from './ExpenseItem1';

function Expenses(props){
console.log("hello Expenses");
console.log(props.items.length);

  const arrayOfObject =[];
   for(let i=0;i<props.items.length;i++){
     const items_=  <ExpenseItem1 title = {props.items[i].title} amount = {props.items[i].amount} date = {props.items[i].date} location = {props.items[i].location}></ExpenseItem1>;

     arrayOfObject.push(items_);
   }

    return(



    <div className="expenses">

        {arrayOfObject}

    </div>
    )
}

export default Expenses;