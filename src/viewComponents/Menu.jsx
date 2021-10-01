import React, { useEffect, useState } from "react";
import BackHomeButton from "./BackHomeButton";
import Header from "./Header";
import menuData from "../menu.json";

const Menu = () => {
  const getDataMenu = menuData;

  const [breakfast, setBreakfast] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [extras, setExtras] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    /* fetchMenu(); */
    setBreakfast(getDataMenu.breakfast);
    setBurgers(getDataMenu.burgers);
    setExtras(getDataMenu.extras);
    setDrinks(getDataMenu.drinks);
  }, [getDataMenu]);

  return (
    <div>
      <Header />
      <BackHomeButton />
      <h1 className="text-center">Menu</h1>
      <div>
        <ul>
          <h3>BREAKFAST</h3>
          {breakfast.map((item) => (
            <li key={item.id}>
              {item.item} - {item.price}
            </li>
          ))}
      
          <h3>BURGERS</h3>
          {burgers.map((item) => (
            <li key={item.id}>
              {item.item} - {item.price}
            </li>
          ))}
      
          <h3>EXTRAS</h3>
          {extras.map((item) => (
            <li key={item.id}>
              {item.item} - {item.price}
            </li>
          ))}
          
      <h3>DRINKS</h3>
      {drinks.map((item) => (
            <li key={item.id}>
              {item.item} - {item.price}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Menu;
