import React, { useEffect, useState } from 'react';
import db from '../Firebase';
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import BackTableButton from "./BackTableButton";
import Header from "./Header";
import ModalPay from '../components/ModalPay';
import "../style/components.css"

const Tables = () => {

const [tables, setTables] = useState([]);
const [modalPay, setModalPay] = useState(false);

useEffect(() =>
  onSnapshot(query(collection(db, "tables"), orderBy("table")), (snapshot) => 
    setTables(snapshot.docs.map((doc) =>({ ...doc.data(), id: doc.id })))
  ), []);
  
  return (
    <div className="container-fluid vh-100 bgcomponents">
      <div className="row pt-1">
        <div className="col-12 pt-3"><BackTableButton /></div>
        <div className="col-12"><Header /></div>
      </div>
      <h1 className="text-center">Tables</h1>

        <div className="tables_cuisine-grid">
        {
          tables.map((data) => (
            <div key={data.id} className="list-group-item list-group-item-action list-group-item bg-dark bg-opacity-75 m-2 overflow-auto text-white">
              <div className="row">
                <div className="col-4">
                  <h6 className="text-warning">Table: {data.table}</h6>
                  <h6>Client: {data.client}</h6>
                </div>
                <div className="col-8 ">
                  <h6 className="text-end">{data.date}</h6>
                  <h6 className="text-end">Waitress/Waiter: {data.waiter}</h6>
                </div>
            </div>
              <div className="list-group list-group-flush">
                {
                data.ordersList.map((product) => 
                  <li key={product.id} className="list-group-item">{product.qty} {product.item} ${product.total.toFixed(2)}</li>
                  )
                }
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-start my-1">
                  <span>Total: {data.total.toFixed(2)}</span>
                </div>
                <div className="col-12 d-flex justify-content-end my-1">
                  <button className="btn btn-sm bg-warning bg-gradient text-white" onTouchStart={() => setModalPay(true)}>PAY</button>
                    {modalPay && <ModalPay closeModal={setModalPay} />}
                </div>
              </div>
            </div>
            ))
          }
        </div>
    </div>
  )
}

export default Tables
