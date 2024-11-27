import React, {useState} from "react";

import Expenses from "./components/Expenses";  

import NewExpense from "./components/ExpenseForm/NewExpense";

let DummyExpenses =[

    {
      id : "e1",
      title : "Car",
      price : 400,
      date : new Date(2021, 12, 12)
    },
    {
      id : "e2",
      title : "Food",
      price : 430,
      date : new Date(2020, 21, 2)
    },
    {
      id : "e3",
      title : "Books",
      price : 400,
      date : new Date(2022, 2, 2)
    },
    {
      id : "e4",
      title : "House Rent",
      price : 400,
      date : new Date(2022, 2, 2)
    },

 ]

function App(){

  const [expenses, setExpense] = useState(DummyExpenses);


  function addExpenseData (expense){

  const updatedExpense = [expense, ...expenses]

  setExpense(updatedExpense);

   

  }


  return (
    <div>
     {/* <h2>Lets start</h2> */}

     <NewExpense onaddExpesneData={addExpenseData} />
     <Expenses  item={expenses}/>
    
    </div>
  ) 
}

export default App;