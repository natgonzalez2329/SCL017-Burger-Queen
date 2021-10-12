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
    setBreakfast(getDataMenu.breakfast);
    setBurgers(getDataMenu.burgers);
    setExtras(getDataMenu.extras);
    setDrinks(getDataMenu.drinks);
  }, [getDataMenu]);

  return (
    <div className="container-fluid vh-100 bgcomponents">
      <div className="row pt-1">
        <div className="col-12 pt-3"><BackHomeButton /></div>
        <div className="col-12"><Header /></div>
      </div>      
      <h1 className="text-center">Menu</h1>
      <div className="my-3 mx-5 px-5">
          <h3 className="text-warning mt-5 mb-3">BREAKFAST</h3>
          {breakfast.map((item) => (
            <div key={item.id} className="row">
              <span className="col-6">{item.item}</span> 
              <span className="col-6 d-flex justify-content-end">${item.price}</span>
            </div>
          ))}
          <h3 className="text-warning mt-5 mb-3">BURGERS</h3>
          {burgers.map((item) => (
            <div key={item.id} className="row">
              <span className="col-6">{item.item}</span> 
              <span className="col-6 d-flex justify-content-end">${item.price}</span>
            </div>
          ))}
          <h4 className="text-warning my-2">EXTRAS</h4>
          {extras.map((item) => (
            <div key={item.id} className="row">
              <span className="col-6">{item.item}</span> 
              <span className="col-6 d-flex justify-content-end">${item.price}</span>
            </div>
          ))}
          <h3 className="text-warning mt-5 mb-3">DRINKS</h3>
          {drinks.map((item) => (
            <div key={item.id} className="row">
              <span className="col-6">{item.item}</span> 
              <span className="col-6 d-flex justify-content-end">${item.price}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menu;
