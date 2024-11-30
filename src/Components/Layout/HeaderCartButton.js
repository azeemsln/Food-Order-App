import React,{useContext,useEffect,useState} from 'react'
import { IoCartOutline } from "react-icons/io5";
import cartContext from '../../Store/cart-context';

function HeaderCartButton(props) {  
  const [btnIsBump,setBtnIsBump]=useState(false);
  const cartCtx=useContext(cartContext);
  const numberOfCartItem=cartCtx.items.reduce((acc, item) =>{
    return(acc+item.amount)
  },0);

  const {items}=cartCtx;  


  useEffect(() =>{
    if(items.length===0){
      return;
    }
    setBtnIsBump(true);
    const timer=setTimeout(() =>{
      setBtnIsBump(false)
    },300);

    return ()=>{
      clearTimeout(timer);
    }
  },[items]);

  return (
    <>
      <button className={`m-[11vw] h-14 rounded-full bg-[#4D1601] w-64 flex justify-center items-center ${btnIsBump?'animate-cart-bump':''}`} onClick={props.onClick}>
          <IoCartOutline className="text-white text-2xl " />
          <div className="text-white text-md font-semibold mx-2">Your Cart</div>
          <div className="bg-[#B94517] rounded-full w-10 flex justify-center">
            <span className="text-white text-md font-semibold ">{numberOfCartItem}</span>
          </div>
        </button>
    </>
  )
}

export default HeaderCartButton
