import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses(props) {
  const date = props.date.return(
    <div className="expenses">
      <ExpenseItem
        title={props.title}
        amount={props.amount}
        date={props.date}
      />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  )
}

export default Expenses
