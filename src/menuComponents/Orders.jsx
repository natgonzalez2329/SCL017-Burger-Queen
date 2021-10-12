import React, {useState} from 'react';
import ModalPay from '../components/ModalPay';
import ModalCommand from '../components/ModalCommand';
import { addTablesData } from '../firebase/Crud';

const Orders = ({orders, setOrders, client, table, waiter, idStaff, date}) => {

  const [modalPay, setModalPay] = useState(false);
  const [modalCommand, setModalCommand] = useState(false);
  
    const ordersFiltered = Object.values(orders).reduce((acc, item) => {
      if (acc[item.item]) {
        acc[item.item].qty += 1;
        acc[item.item].total += acc[item.item].price;
      } else {
        acc[item.item] = {
          item: item.item,
          id: item.id,
          qty: 1,
          price: item.price,
          total: item.price
        }
      }
      return acc;
    }, {});

    const arrayOrders = Object.values(ordersFiltered);

    const total = orders.reduce((acc,{price}) => acc + price ,0);

    const removeItemLine = (id) => {
      const ordersAllItemsRemoved = arrayOrders.filter(item => item.id !== id);
      return setOrders(ordersAllItemsRemoved);
    };

    const clearOrders = () => setOrders([]);

    const addCollectionTables = () => {
      let ordersList = arrayOrders;
      const itemsCollectionTables = {client, table, waiter, idStaff, date, ordersList, total}
      addTablesData(itemsCollectionTables)
      setModalCommand(true)
      console.log('addd')
    }

  return (
    <div className="orders-container">
      <div>
        <ul>
        { arrayOrders.length === 0 ? (
          <h1 className="text-center fst-italic text-white-50">Add a new order.</h1>
        ): (
          arrayOrders.map((item) => (
          <li className="list-group-item mt-1 bg-dark bg-gradient text-white" key={item.id}>
            <span>{item.qty}   {item.item}   ${item.total.toFixed(2)}</span>
            {/* <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg></button> */}
            <button className="btn btn-danger btn-sm bg-gradient float-end d-flex justify-content-center" onTouchStart={() => removeItemLine(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg></button>
          </li>
          ))
        )}
        </ul>
      </div>
      <div>
        <h4>Total: {total.toFixed(2)}</h4>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <button className="btn bg-danger bg-gradient text-white" onTouchStart={() => clearOrders()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
            </svg></button>
        </div>
        <div className="col-12 d-flex justify-content-around my-5 py-5">
          <button className="btn btn-lg bg-warning bg-gradient text-white" onTouchStart={() => setModalPay(true)}>PAY</button>
          {modalPay && <ModalPay closeModal={setModalPay} />}
          <button className="btn btn-lg orders-command text-white" onTouchStart={() => addCollectionTables()}>COMMAND</button>
          {modalCommand && <ModalCommand closeModal={setModalCommand} />}
        </div>
      </div>
    </div>
  )
}

export default Orders


    /* const desagruparPedido = (pedidoAgrupado) => {
      let arrayPedidos = []
      pedidoAgrupado.forEach(pedido => { */
        //crear nuevos pedidos a partir de la cantidad del pedido
        /* let newArrayOrder = [];
        for(let i = 0; i < pedido.qty; i++) {
          newArrayOrder.push({id: pedido.id, item: pedido.item, price: pedido.price})
        }
        arrayPedidos.push(newArrayOrder);

      })
      console.log(arrayPedidos)
      return arrayPedidos;
    } */

      /*  const removeOneItem = (item) =>{
        const orderToUpdate = Object.values(ordersFiltered).find(element => element.id === item.id);
        if(orderToUpdate.qty === 1) {
          removeItemLine(item.id);
          // console.log('remove just one')
        } else if(orderToUpdate.qty > 1){
          const mapMenosUno = Object.values(ordersFiltered).map((element) => {
            if(element.id === item.id) {
              const itemModified = { ...item, qty: item.qty - 1 }
              console.log(itemModified);
              return itemModified
            }
            return element;
          }) */
          // console.log(mapMenosUno);
          // console.log('tengo mas de uno')
          // console.log('objeto modificado')
          // console.log(orderToUpdate);
          /*  const desagrupado = desagruparPedido(mapMenosUno);
          setOrders(desagrupado);
        }      
    }  */
