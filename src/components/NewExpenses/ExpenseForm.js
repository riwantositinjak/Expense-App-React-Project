import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //   const [titleChange, setTitleChange] = useState("");
  //   const [amountChange, setAmountChange] = useState("");
  //   const [dateChange, setDateChange] = useState("");
  const [userInput, setUserInput] = useState({
    titleChange: "",
    amountChange: "",
    dateChange: "",
  });

  const titleChangeEventHandler = (event) => {
    // setTitleChange(event.target.value);
    setUserInput({
      ...userInput,
      titleChange: event.target.value,
    });
  };

  const AmountChangeHandler = (event) => {
    // setAmountChange(event.target.value);
    setUserInput({
      ...userInput,
      amountChange: event.target.value,
    });
  };
  const dateChangeHandler = (event) => {
    // setDateChange(event.target.value);
    setUserInput({
      ...userInput,
      dateChange: event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeEventHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2019-01-29"
            max="2022-12-31"
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
