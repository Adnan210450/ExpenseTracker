import { useState } from "react";
// import FontAwesomeIcon from "index.html";

const Toggle = ({ budgetToggle, setTotalBudget, setBudgetToggle }) => {

    const [inputValue, setInputValue] = useState(0);

    const addAmount = () => {
        let budget = parseInt(inputValue);
        if (!budget) {
            alert("Enter a Amount")
        }
        setTotalBudget(budget);
        setBudgetToggle(false)
    }

    const closeIcon = () => {
        setBudgetToggle(false)
    }

    return (
        <>
            {
                budgetToggle ?
                    <div className="pop-up">
                        <h2 onClick={closeIcon}>X</h2>
                        <h3>Add Budget </h3>
                        <hr />
                        <p>Amount</p>
                        <input type="text" placeholder="Amount" onChange={(e) => setInputValue(e.target.value)} />
                        <button onClick={addAmount}>Sumbit Budget</button>
                    </div> : ""
            }

        </>
    )
}
export default Toggle;