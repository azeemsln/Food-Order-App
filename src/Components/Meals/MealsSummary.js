import React from "react";

function MealsSummary() {
  return (
    <>
    <div className="flex justify-center items-center drop-shadow-2xl ">
    <section className="bg-[#383838] text-white w-[50%] h-56 rounded-xl flex flex-col justify-center items-center absolute ">
        <h2 className="text-3xl font-semibold text-center mb-10 ">Delicious Food, Delivered To You</h2>
        <p className="px-5 mx-auto text-center">
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p className="px-10 mt-5 text-center">
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>
    </div>
      
    </>
  );
}

export default MealsSummary;
