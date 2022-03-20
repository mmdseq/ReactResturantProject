import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious 
    <span style={{color: 'green'}}> Ira</span>
    <span style={{color: 'white'}}>ni</span>
    <span style={{color: 'red'}}>an </span>
     Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with highs-quality ingredients, just-in-time and
        of course by experienced chefs!

        
      </p>
    </section>
  );
};

export default MealsSummary;
