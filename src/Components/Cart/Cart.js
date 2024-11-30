import React, { useContext } from "react";
import Model from "../UI/Model";
import cartContext from "../../Store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(cartContext);
  const totalAmount = `\u20B9${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1});
  };
  const cartItems = (
    <ul className=" w-[100%] ">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
        
      ))}

    </ul>
  );
  return (
    <Model cartDetails={props.cartDetails} onClose={props.onClose}>
      <div className="max-h-[20rem] overflow-y-auto overflow-x-hidden">
        {cartItems}
      </div>

      <div className="flex justify-between items-center font-semibold mx-[1rem] text-2xl ">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="flex justify-end m-3 items-center font-semibold mx-[1rem]">
        <button
          onClick={props.onClose}
          className="rounded-full border mr-2  border-slate-500 hover:bg-[#8A2B06] hover:text-white  w-[20%] h-10"
        >
          Close
        </button>
        {hasItems && (
          <button className="rounded-full border  border-slate-500 hover:bg-[#8A2B06] hover:text-white  w-[25%] h-10">
            Order
          </button>
        )}
      </div>
    </Model>
  );
}

export default Cart;
