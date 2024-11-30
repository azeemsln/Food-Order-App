import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Burger",
    description: "Burger King Special",
    price: "199",
  },
  {
    id: "m2",
    name: "Pizza",
    description: "Spicy Paneer butter",
    price: "750.50",
  },
  {
    id: "m3",
    name: "Kadhai Panner",
    description: "Spicy Handy Paneer ",
    price: "350",
  },
  {
    id: "m4",
    name: "Fry-Rice",
    description: "Veg Fry Rice",
    price: "99.99",
  },
];
function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));
  return (
    <>
      <section className="flex justify-center items-center mt-32 animate-meals-appear">
        <Card>
          <ul className="bg-white  w-[65%] rounded-2xl p-7 m-5">{mealsList}</ul>
        </Card>
      </section>
    </>
  );
}

export default AvailableMeals;
