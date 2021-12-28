import './ExpenseItems.css';

function ExpenseItems (props) {
    return (
        <div className='expenses'>
            <div className='expense-date'>
                <div className='expense-date__day'>{props.date.toLocaleDateString('en-US', {day: 'numeric'})}</div>
                <div className='expense-date__month'>{props.date.toLocaleDateString('en-US', { month: 'long'})}</div>
                <div className='expense-date__year'>{props.date.getFullYear()}</div>
            </div>
            <div className='expense-item__description'>{props.title}</div>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    )
}

export default ExpenseItems;