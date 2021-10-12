import React, { useEffect, useState } from 'react';
import db from '../Firebase';
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import BackHomeButton from "./BackHomeButton";
import Header from "./Header";
import "../style/components.css"

const Cuisine = () => {

  const [cuisine, setCuisine] = useState([]);
  
  useEffect(() =>
    onSnapshot(query(collection(db, "tables"), orderBy("date", "desc")), (snapshot) => 
      setCuisine(snapshot.docs.map((doc) =>({ ...doc.data(), id: doc.id })))
    ), []);

  return (
    <div className="container-fluid vh-100 bgcomponents">
      <div className="row pt-1">
        <div className="col-12 pt-3"><BackHomeButton /></div>
        <div className="col-12"><Header /></div>
      </div>
      <h1 className="text-center">Cuisine</h1>
      <div className="tables_cuisine-grid">
        {
          cuisine.map((data) => (
            <div key={data.id} className="list-group-item list-group-item-action list-group-item bg-dark bg-opacity-75 m-2 overflow-auto text-white">
              <div className="row">
                <div className="col-4">
                  <h6>Table: {data.table}</h6>
                </div>
                <div className="col-8 ">
                  <h6 className="text-end text-warning">{data.date}</h6>
                  <h6 className="text-end">Waitress/Waiter: {data.waiter}</h6>
                </div>
            </div>
              <div className="list-group list-group-flush">
                {
                data.ordersList.map((product) => 
                  <li key={product.id} className="list-group-item">{product.qty} {product.item}</li>
                  )
                }
              </div>
            </div>
            ))
          }
          </div>
    </div>
  )
}

export default Cuisine
