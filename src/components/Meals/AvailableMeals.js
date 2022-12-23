import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest Japanese Cuisine Tradition",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "German or Austrian speciality? Nevermind..is just delicious!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "The classic burger. Long live to classics!",
    price: 12.4,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Eden Garden of Healthy",
    price: 17.2,
  },
];

const AvailableMeals = (props) => {
  const mealLists = DUMMY_MEALS.map((meal) => {
    return <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />;
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealLists}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
