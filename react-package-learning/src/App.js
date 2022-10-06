import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/Heading.css";

function App() {
  const expense = [
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
    { id: "e4", title: "Bicycle", amount: 394.67, date: new Date(2022, 8, 4) },
  ];
  return (
    <div>
      <h2 className="title">Learning ReactJS</h2>
      <Expenses items={expense} />
    </div>
  );
}
export default App;
