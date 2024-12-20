
import React from "react";
import "./ExpensItems.css";
import ExpenseDate from "./ExpenseDate";

function ExpensItem (props){

    return (
        <div className="expense-item">
            <div>
                <ExpenseDate date={props.date} />
        </div>
        <div className="expense-item__description">
            <h2>
                {props.title} 
            </h2>
            <div className="expense-item__price">${props.price}</div>
        </div>
       
        </div>
    )
}

export default ExpensItem;