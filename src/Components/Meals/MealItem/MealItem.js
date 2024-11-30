import React,{useContext} from "react";
import MealItemForm from "./MealItemForm";
import cartContext from "../../../Store/cart-context";

function MealItem(props) {
  const cartCtx=useContext(cartContext);


  const price = `\u20B9${props.price}`;

  const addToCartHandler=amount=>{
    cartCtx.addItem({
      id:props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  }

  return (
    <>
      <li className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold mb-2 text-xl">{props.name}</h1>
          <div className="mb-2 italic">{props.description}</div>
          <div className="mb-2 text-xl font-semibold text-[#AE5705]">
            {price}
          </div>
        </div>

        <div className="">
          <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>
        </div>
      </li>
      <hr className="my-2"></hr>

    </>
  );
}

export default MealItem;
