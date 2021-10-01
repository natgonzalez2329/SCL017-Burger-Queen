import React, { useEffect, useState } from 'react';
import BackTableButton from "./BackTableButton";
import Header from "./Header";
import Breakfast from '../menuComponents/Breakfast';
import Burgers from '../menuComponents/Burgers';
import Extras from '../menuComponents/Extras';
import Drinks from '../menuComponents/Drinks';
import ModalPay from '../components/ModalPay';
import ModalCommand from '../components/ModalCommand';
import menuData from '../menu.json';

const NewTable = () => {
  const getDataMenu= menuData;

    const [breakfast, setBreakfast] = useState([]);
    const [burgers, setBurgers] = useState([]);
    const [extras, setExtras] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [modalPay, setModalPay] = useState(false);
    const [modalCommand, setModalCommand] = useState(false)
  
  useEffect(() => {
    setBreakfast(getDataMenu.breakfast);
    setBurgers(getDataMenu.burgers);
    setExtras(getDataMenu.extras);
    setDrinks(getDataMenu.drinks);
  }, [getDataMenu]);

  return (
    <div className="container-fluid">
      <Header />
      <BackTableButton />
      <h1 className="text-center">New table</h1>
      <div className="row">
        # Table
        Client name
        Date
        ID Waiter-Waitress
      </div>
      <div className="row">
        <div className="col-6">
          <h1>MENU</h1>
          <ul>
            <h1>BREAKFAST</h1>
              <Breakfast dataBreakfast={breakfast} />
            <h1>BURGERS</h1>
              <Burgers dataBurgers={burgers} />
            <h1>EXTRAS</h1>
              <Extras dataExtras={extras} />
            <h1>DRINKS</h1>
              <Drinks dataDrinks={drinks} />
          </ul>
        </div>
        <div className="col-6">
          <h1># Order</h1>
          <button onClick={() => setModalPay(true)}>PAY</button>
          {modalPay && <ModalPay closeModal={setModalPay} />}
          <button onClick={() => setModalCommand(true)}>COMMAND</button>
          {modalCommand && <ModalCommand closeModal={setModalCommand} />}
        </div>
      </div>
    </div>
  )
}

export default NewTable
