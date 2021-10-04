import React, { useState } from 'react';
/* import { Link } from 'react-router-dom'; */
import db from '../Firebase';
import { collection, addDoc } from "firebase/firestore";
import '../style/modalNewTable.css'

const ModalNewTable = ({ closeModal }) => {

  const [client, setClient] = useState('');
  const [table, setTable] = useState('');

  const addTableClient = (e) =>{
    e.preventDefault();
    const collectionTable = { client, table };
    console.log(collectionTable); 
    addTables(table, client)
  }
  const addTables = async(table, client) => {
    try {
      const docRef = await addDoc(collection(db, "tables"), {
        table,
        client
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="modalBackground">
      <div className="modal-container">
        <div className='container__modal'>
                <div className='content__modal'>
                  <span className='close__modal' onClick={() => closeModal(false)}>&times;</span>
                  <form onSubmit={(e) => addTableClient(e)}>
                    <input type="text" placeholder="Client's name" value={client} onChange={(e) => setClient(e.target.value)}/>
                    <input type="text" placeholder="Table" value={table} onChange={(e) => setTable(e.target.value)}/>
                    <div className='modal__footer'>
                      <button className="btn btn-danger m-2" onClick={() => closeModal(false)}>CANCEL</button>
                      {/* <Link to='/newTable'>
                      </Link> */}
                        <button className='btn btn-warning text-white' type="submit">NEW TABLE</button>
                    </div>
                  </form>
                  <p>Name: {client} - Table: {table}</p>
                </div>
              </div>
      </div>
    </div>
  )
}

export default ModalNewTable
