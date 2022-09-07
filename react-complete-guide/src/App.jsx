import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 9, 4),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: 24.67,
      date: new Date(2022, 6, 4),
    },
    { id: "e3", title: "Rock", amount: 221.67, date: new Date(2022, 5, 4) },
    { id: "e4", title: "Bicycle", amount: 394.67, date: new Date(2022, 8, 4) }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}
export default App;
