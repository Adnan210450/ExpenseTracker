import searchicon from "../assets/searchicon.svg"
import food from "../assets/food.svg"
import groceries from "../assets/groceries.svg"
import add from "../assets/add.svg"
import travel from "../assets/travel.svg"
import health from "../assets/health.svg"
import Toggle from "./toggle"
import { useState } from "react"
import ToggleExpense from "./ToggleExpense"
const Button = ({setTotalBudget, handleExpenses,handleCategoryFilter,handleSearch}) => {
    const [budgetToggle, setBudgetToggle] = useState(false)
    const [expenseToggle, setExpenseToggle] = useState(false)
    
    const expenseModalToggle = () =>{
        setExpenseToggle(true)
    }

    function addBudgetToggle() {
        setBudgetToggle(true)
    }

    return (
        <>
            <div className="button-container">

                <div id="Search">
                    <img src={searchicon} alt="" />
                    <input type="text" placeholder="Search" id="searchbar"  onChange={(e) => handleSearch(e.target.value)}/>
                </div>
                <button className="buttons" onClick={() => handleCategoryFilter("All")}>All Expenses</button>

                <button className="buttons"  onClick={() => handleCategoryFilter("food and drinks")}><img src={food} alt="" />Food And Drinks</button>
                <button className="buttons"    onClick={() => handleCategoryFilter("Groceries")}><img src={groceries} alt="" />Groceries</button>
                <button className="buttons"   onClick={() => handleCategoryFilter("Travel")}><img src={travel} alt="" />Travel</button>
                <button className="buttons"   onClick={() => handleCategoryFilter("Health")}><img src={health} alt="" />Health</button>
                <button className="dynamicbuttons" onClick={addBudgetToggle} ><img src={add} alt="" />Add Budget</button>
                <button className="dynamicbuttons" onClick={expenseModalToggle}><img src={add} alt="" />Add Expenses</button>
                <Toggle budgetToggle={budgetToggle} setBudgetToggle={setBudgetToggle} setTotalBudget={setTotalBudget} />
                <ToggleExpense expenseToggle={expenseToggle} handleExpenses={handleExpenses} setExpenseToggle={setExpenseToggle} />
            </div>
        </>
    )
}
export default Button;