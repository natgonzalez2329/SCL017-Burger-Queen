import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/modalNewTable.css'

const ModalNewTable = ({ closeModal, newClientHandler, newTableClient }) => {

  const [client, setClient] = useState('');
  const [table, setTable] = useState('');

  let history = useHistory();

  const addTableClient = (e) =>{
    e.preventDefault();
    const collectionTable = { client, table };
    newClientHandler(client);
    newTableClient(table);
    console.log(collectionTable);
    localStorage.setItem('tablesClient', JSON.stringify(client));
    localStorage.setItem('tablesTable', JSON.stringify(table));
    history.push('/newTable');
  }

  return (
    <div className="modalBackground">
      <div className="modal-container">
        <div className='container__modal'>
          <div className='content__modal'>
              <span className='close__modal d-flex justify-content-end' onTouchStart={() => closeModal(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                </svg>
              </span>
              <form onSubmit={(e) => addTableClient(e)}>
                  <input type="text" className="form-control my-3" placeholder="Client's name" value={client} onChange={(e) => setClient(e.target.value)}/>
                  <input type="text" className="form-control mb-3" placeholder="Table" value={table} onChange={(e) => setTable(e.target.value)}/>
                  <div className='modal__footer d-grid gap-2 d-md-flex justify-content-md-end'>
                    <button className="btn btn-danger me-md-2" onClick={() => closeModal(false)}>CANCEL</button>
                    <button className='btn btn-warning text-white' type="submit">NEW TABLE</button>
                  </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalNewTable
