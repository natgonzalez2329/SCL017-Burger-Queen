import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addTablesData } from '../firebase/Crud';
import '../style/modalNewTable.css'

const ModalNewTable = ({ closeModal, newClientHandler, newTableClient}) => {

  const [client, setClient] = useState('');
  const [table, setTable] = useState('');

  let history = useHistory();

  const addTableClient = (e) =>{
    e.preventDefault();
    const collectionTable = { client, table };
    newClientHandler(client);
    newTableClient(table);
    console.log(collectionTable); 
    addTablesData(table, client)
    history.push('/newTable');
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
