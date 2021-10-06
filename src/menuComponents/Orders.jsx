import React, { useState } from 'react';

const Orders = ({orders}) => {

 /*    const nTotalPrice = Object.values(orders).reduce((acc, item) => {
      acc[item.item] = (acc[item.item] || 0) + item.price;
      return acc
    }, {});  
    
    const nUnit = Object.values(orders).reduce((acc, item) => {
      acc[item.item] = (acc[item.item] || 0) + 1;
      return acc
    }, {});

    const uniqueItem = [...new Set(orders.map((item) => item.item))];


    console.log('contador')
    console.log(nTotalPrice)
    console.log(uniqueItem) */
    
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
      return acc
    }, {});
    
  
    const total = Object.values(orders).reduce((acc,{price}) => acc + price ,0);
    
  return (
    <div>
      {
        Object.values(ordersFiltered).map((item) => (
          <li key={item.id}>
            <span>cantidad:{item.qty} - {item.item} - {item.total}</span>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg></button>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewbox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg></button>
          </li>
          ))
        }
      <div>
        Total: {total};
      </div>
    </div>
  )
}

export default Orders
