import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BackHomeButton from "./BackHomeButton";
import Header from "./Header";
import ModalNewTable from '../components/ModalNewTable'

const MenuTables = ({ newClientHandler, newTableClient }) => {

  const [modalNewTable, setModalNewTable] = useState(false)

  return (
    <div className="m-0 vh-100">
      <div className="row pt-5">
        <div className="col-1 p-3"><BackHomeButton /></div>
        <div className="col-11 mr-5"><Header /></div>
      </div>
      <h4 className="text-end m-5 mb-0 mt-0">
        Waiter: {JSON.parse(localStorage.getItem('staffName'))}
      </h4>
      <div className="d-flex justify-content-center align-items-center menu-tables">
        <div className="d-grid gap-2 col-6 mx-auto ">
          <Link to='/tables' className='btn btn-warning btn-lg text-white' >
            TABLES
          </Link>
          <button className='btn btn-warning btn-lg text-white' onClick={() => setModalNewTable(true)}>NEW TABLE</button>
            {modalNewTable && <ModalNewTable 
            closeModal={setModalNewTable} 
            newClientHandler={newClientHandler} 
            newTableClient={newTableClient} />}
          <Link to='/cuisine' className='btn btn-warning btn-lg text-white' >
            CUISINE
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MenuTables
