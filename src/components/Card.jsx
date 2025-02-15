import { useState } from "react";

const Card = ({name, amount, image}) => {

     // console.log(image)
    return (
        <>
            <section id="expensedetails">
                <div id="totalbudget">
                    <div id="totalbudgetsection">
                        <p>{name}</p>
                        <h2>₹{amount}</h2>

                    </div>
                    <div>
                        <img src={image} alt="" />
                    </div>
                </div>


            </section>
        </>
    )
}
export default Card;