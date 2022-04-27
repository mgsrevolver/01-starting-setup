import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  )
}

export default Expenses
