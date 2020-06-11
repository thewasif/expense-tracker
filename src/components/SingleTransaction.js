import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = (props) => {
  let { transaction } = props;

  let { deleteTransac } = useContext(GlobalContext);
  let sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="btn-delete"
        onClick={() => deleteTransac(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
