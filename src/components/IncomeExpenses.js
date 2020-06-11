import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((ac, item) => (ac += item), 0)
    .toFixed(2);

  let expense = (
    amounts.filter((item) => item < 0).reduce((ac, item) => (ac += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="expense-container">
      <div>
        <h4>Income</h4>
        <p className="money positive">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money negative">${expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
