import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleChange, setTitleChange] = useState("");
  const [amountChange, setAmountChange] = useState("");
  const [dateChange, setDateChange] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     titleChange: "",
  //     amountChange: "",
  //     dateChange: "",
  //   });

  const titleChangeEventHandler = (event) => {
    setTitleChange(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   titleChange: event.target.value,
    // });
  };

  const AmountChangeHandler = (event) => {
    setAmountChange(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amountChange: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setDateChange(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   dateChange: event.target.value,
    // });
  };

  const submitChangeHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: titleChange,
      amount: amountChange,
      date: new Date(dateChange),
    };
    props.onSaveExpenseData(expenseData);
    setTitleChange("");
    setAmountChange("");
    setDateChange("");
  };

  return (
    <form onSubmit={submitChangeHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={titleChange}
            onChange={titleChangeEventHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amountChange}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2019-01-29"
            max="2022-12-31"
            value={dateChange}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
