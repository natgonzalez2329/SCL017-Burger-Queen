import React, { useEffect, useState } from 'react';
import BackTableButton from "./BackTableButton";
import Header from "./Header";
import Breakfast from '../menuComponents/Breakfast';
import Burgers from '../menuComponents/Burgers';
import Extras from '../menuComponents/Extras';
import Drinks from '../menuComponents/Drinks';
import Orders from '../menuComponents/Orders';
import MessageButton from '../components/MessageButton';
import '../style/tabsMenu.css'
import menuData from '../menu.json';

const NewTable = ({client, table}) => {
  const getDataMenu= menuData;
  const idStaff = JSON.parse(localStorage.getItem('staffId'));
  const waiter = JSON.parse(localStorage.getItem('staffName'));

    const [toggleState, setToggleState] = useState(1);
    const [breakfast, setBreakfast] = useState([]);
    const [burgers, setBurgers] = useState([]);
    const [extras, setExtras] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    setBreakfast(getDataMenu.breakfast);
    setBurgers(getDataMenu.burgers);
    setExtras(getDataMenu.extras);
    setDrinks(getDataMenu.drinks);
  }, [getDataMenu]);

  const toggleTab = (index) => {
    setToggleState(index);
  };

const today = new Date();
const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear() +' '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

console.log(date)
  return (
    <div className="container-fluid vh-100 pb-5">
      <div className="row pt-1">
        <div className="col-12 pt-3"><BackTableButton /></div>
        <div className="col-12"><Header /></div>
      </div>
      <div className="row">
        <div className="col">
          <p><h5>Table: {JSON.parse(localStorage.getItem('tablesTable'))}</h5>
          <h5>Client: {JSON.parse(localStorage.getItem('tablesClient'))}</h5></p>
        </div>
        <div className="col d-flex justify-content-end">
          <p><h5>Date: {date}</h5>
          <h5>Waitress/Waiter: {waiter}</h5></p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h1 className="text-center">MENU</h1>
            <div className="col-12container-tab m-1">
            <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onTouchStart={() => toggleTab(1)}
        >
          BURGERS
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onTouchStart={() => toggleTab(2)}
        >
          BREAKFAST
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onTouchStart={() => toggleTab(3)}
        >
          DRINKS
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Burgers 
              dataBurgers={burgers}
              orderBurgers={orders}
              setOrderBurgers={setOrders} />
          <h5>EXTRAS</h5>
          <Extras 
              dataExtras={extras}
              orderExtras={orders}
              setOrderExtras={setOrders} />
          <MessageButton />
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Breakfast 
              dataBreakfast={breakfast} 
              orderBreakfast={orders}
              setOrderBreakfast={setOrders}
              />
          <MessageButton />
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Drinks 
              dataDrinks={drinks}
              orderDrinks={orders}
              setOrderDrinks={setOrders} />
          <MessageButton />
        </div>
      </div>
            </div>
        </div>
        <div className="col-6">
          <h1 className="text-center"># Order</h1>
            <Orders 
            orders={orders} 
            setOrders={setOrders}
            client={client}
            table={table}
            waiter={waiter}
            idStaff={idStaff}
            date={date}/>
        </div>
      </div>
    </div>
  )
}

export default NewTable
