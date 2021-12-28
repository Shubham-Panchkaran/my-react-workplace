import ExpenseItems from './components/ExpenseItems';

function App() {
  const expenses = {
    date: new Date(),
    title: 'Expense List',
    amount: 237.78
  }
  return (
    <div className="App">
      <ExpenseItems date={expenses.date} title={expenses.title} amount={expenses.amount}></ExpenseItems>
      <ExpenseItems date={expenses.date} title={expenses.title} amount={expenses.amount}></ExpenseItems>
      <ExpenseItems date={expenses.date} title={expenses.title} amount={expenses.amount}></ExpenseItems>
    </div>
  );
}

export default App;
