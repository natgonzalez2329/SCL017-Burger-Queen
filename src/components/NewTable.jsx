import React, { useEffect, useState } from 'react';
import BackTableButton from "./BackTableButton";
import Header from "./Header";
import Breakfast from '../menuComponents/Breakfast';
import Burgers from '../menuComponents/Burgers';
import Extras from '../menuComponents/Extras';
import Drinks from '../menuComponents/Drinks';
import menuData from '../menu.json';

const NewTable = () => {
  const getDataMenu= menuData;

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
  }, []);

  /* const fetchMenu = () => {
    setBreakfast(getDataMenu.breakfast);
    setBurgers(getDataMenu.burgers);
    setExtras(getDataMenu.extras);
    setDrinks(getDataMenu.drinks);
  } */
  
/*   const fecthMenu = async() => {
    const dataMenu = await fetch('./menu.json');
   /*  console.log(dataMenu) */
    
    /*  const getDataMenu = await dataMenu.json();
    console.log(getDataMenu);
    setBreakfast(getDataMenu.breakfast);
    setBurgers(getDataMenu.burgers);
  }   */ 
  
  return (
    <div>
      <Header />
      <BackTableButton />
      <h1 className="text-center">New table</h1>
      <div>
        <h1>MENU</h1>
        <ul>
            <Breakfast dataBreakfast={breakfast} />
            <Burgers dataBurgers={burgers} />
            <Extras dataExtras={extras} />
            <Drinks dataDrinks={drinks} />
        </ul>
      </div>
    </div>
  )
}

export default NewTable
