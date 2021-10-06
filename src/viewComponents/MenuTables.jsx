import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BackHomeButton from "./BackHomeButton";
import Header from "./Header";
import ModalNewTable from '../components/ModalNewTable'

const MenuTables = ({newClientHandler, newTableClient}) => {

  const [modalNewTable, setModalNewTable] = useState(false)

  return (
    <div className="vh-100 m-0">
      <Header />
      <BackHomeButton />
      <p>Waiter: {JSON.parse(localStorage.getItem('staffName'))} <br/>
        ID Waiter-Waitress: {JSON.parse(localStorage.getItem('staffId'))}</p>
      <div className="d-flex justify-content-center align-items-center menu-tables">
        <div className="d-grid gap-2 col-6 mx-auto ">
          <Link to='/tables' className='btn btn-warning text-white' >
            TABLES
          </Link>
          <button className='btn btn-warning text-white' onClick={() => setModalNewTable(true)}>NEW TABLE</button>
            {modalNewTable && <ModalNewTable closeModal={setModalNewTable} newClientHandler={newClientHandler} newTableClient={newTableClient} />}
          <Link to='/newTable' className='btn btn-warning text-white' >
            NEW TABLE
          </Link>
          <Link to='/cuisine' className='btn btn-warning text-white' >
            CUISINE
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MenuTables
