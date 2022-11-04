// invoked from ExpenseItem1 component

import './Card.css';
function Card(props) {  
  const classes = 'card ' + props.className;
 // console.log("classes contains"+ classes);
  
  return (
  <div className={classes}>{props.children}</div>
  );
}

export default Card;
