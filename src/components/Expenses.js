import './Expenses.css';
import ExpensItem from './ExpensItems';

function Expenses(props){
    return (
        <div className="expenses">
{

          props.item.map(expense => (
              <ExpensItem 
                        title={expense.title} 
                        price={expense.price}
                        date={expense.date} 
                         />
            )
          )
        }
        </div>
    )
}

export default Expenses;