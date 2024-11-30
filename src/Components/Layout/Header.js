import React from "react";
import mealsImage from "../../assets/mealsPic.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <React.Fragment>
      <div className="w-full bg-[#8A2B06] flex h-20 justify-between items-center z-10 fixed">
        <header className="text-white text-3xl font-semibold mx-[10vw] ">
          ReactMeals{" "}
        </header>
        
        <HeaderCartButton onClick={props.onShowCart}/>
      </div>

      <div className="w-[100%] h-[20rem] z-0 overflow-hidden relative">
        <img
          className="bg-cover w-[110%] h-[110%] object-cover"
          style={{
            transform: "rotateZ(-5deg) translateY(-4rem) translateX(0rem)",
          }}
          src={mealsImage}
          alt="A table full of delicious food"
        />
      </div>
    </React.Fragment>
  );
}

export default Header;
