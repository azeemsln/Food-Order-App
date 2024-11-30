import React from "react";

function CartItem(props) {
  const price = `\u20B9${props.item.price}`;
  return (
    <>
      <li>
        <div className="w-[100%] flex justify-between">
          <div>
            <div className="text-2xl text-[#363636] font-semibold mt-5 ">
              {props.item.name}
            </div>
            <div className="flex items-center ">
              <h1 className="text-[#8A2B06] font-semibold mt-3">{price}</h1>
              <div className="ml-16 mt-2 mx-auto font-semibold w-12 h-8 border  border-zinc-300 rounded text-center py-auto">
                x{props.item.amount}
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center ml-20 ">
            <button
              className="w-12 h-8 text-2xl  text-[#842B06] hover:bg-[#842B06] hover:text-white  border border-zinc-300 font-semibold rounded-lg m-2"
              onClick={props.onRemove}
            >
              -
            </button>
            <button
              className="w-12 h-8 text-2xl  text-[#842B06] hover:bg-[#842B06] hover:text-white  border border-zinc-300 font-semibold rounded-lg m-2 "
              onClick={props.onAdd}
            >
              +
            </button>
          </div>
        </div>
        <hr className=" bg-[#8A2B06] h-[2px] mt-3"></hr>
      </li>
    </>
  );
}

export default CartItem;
