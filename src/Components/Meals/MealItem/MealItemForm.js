import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

function MealItemForm(props) {
  const [amountIsValid, setAmountisValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setAmountisValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <>
    <form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button className="w-28 h-8 bg-[#8A2B06] text-white font-semibold rounded-full">
        +Add
      </button>
      {!amountIsValid && <p>Please enter a valid amount (1-10)</p>}
    </form>
    </>
  );
}

export default MealItemForm;
