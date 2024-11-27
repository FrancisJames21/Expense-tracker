import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
    const [EnterTitle, SetEnterTitle] = useState("");
    const [EnterAmount, SetEnterAmount] = useState("");
    const [EnterDate, SetEnterDate] = useState("");

    function ChangeOnTitle(event) {
        SetEnterTitle(event.target.value);
    }

    function ChangeOnAmount(event) {
        SetEnterAmount(event.target.value);
    }

    function ChangeOnDate(event) {
        SetEnterDate(event.target.value);
    }

    function SubmitHandler(event) {
        event.preventDefault();

        const expenseData = {
            title: EnterTitle,
            price: EnterAmount, // Convert string to number
            date: new Date(EnterDate),
        };

        // Ensure props.onSaveExpenseData exists and is called
        
        props.onSaveExpenseData(expenseData);
        
     

        // Clear inputs
        SetEnterTitle("");
        SetEnterAmount("");
        SetEnterDate("");
    }

    return (
        <div className="form-container">
            <form onSubmit={SubmitHandler} className="expense-form">
                <h2>Enter Your Expenses</h2>

                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    value={EnterTitle}
                    id="title"
                    name="title"
                    placeholder="Enter expense title"
                    required
                    onChange={ChangeOnTitle}
                />

                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    value={EnterAmount}
                    id="amount"
                    name="amount"
                    placeholder="Enter amount"
                    required
                    onChange={ChangeOnAmount}
                />

                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    value={EnterDate}
                    id="date"
                    name="date"
                    required
                    onChange={ChangeOnDate}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ExpenseForm;
