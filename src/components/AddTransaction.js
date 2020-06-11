import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addTransac } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTrans = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount,
    };

    addTransac(newTrans);
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text.."
          />
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};
