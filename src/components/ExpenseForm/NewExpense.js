import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

    function saveExpenseDataHandler(enteredExpenseData) {

        const expenseData ={
            ...enteredExpenseData,
            id : Math.random().toString(),
        }

        props.onaddExpesneData(expenseData);
    }

    return (
        <div>
            {/* Pass saveExpenseDataHandler as a prop */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;
