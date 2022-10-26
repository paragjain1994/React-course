import './ExpenseItem.css';
function ExpenseItem1(){


    const expenseDate = new Date(2021,2,28);
    const expenseTitle = 'car insurance';
    const expenseAmount = 294.65;
    const expenseLocation = 'Delhi';
    return (
        <div className= 'expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                 <h2>{expenseTitle}</h2>
                 <h2>{expenseLocation}</h2>
                 <div className='expense-item__price'>${expenseAmount}</div>
            </div>
           </div>
    )
}
export default ExpenseItem1;