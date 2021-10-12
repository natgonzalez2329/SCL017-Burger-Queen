import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from "./Header";
import ModalEnroll from '../components/ModalEnroll';
import { getStaffData } from '../firebase/Crud';
import "../index.css"

const Home = () => {
  const [modalEnroll, setModalEnroll] = useState(false);
  const [idStaff, setIdStaff] = useState('');
  const [error, setError] = useState(null);
  const [routeMenuTable, setRouteMenuTable] = useState(false);

  const LinkToMenuTable = () => {
    let history = useHistory();
    history.push('/menuTables');
  }

  const accessStaff = async(e) => {
    e.preventDefault();
    const idStaffAccess = { idStaff };
    console.log('4' + idStaffAccess)
    const isExist = await getStaffData(idStaff);
    if(!isExist) {
      setError('ID doesn´t exist');
      return
    }
    setIdStaff('');
    setError(null);
    setRouteMenuTable(true);
  }

  return (
    <div className="container-fluid m-0 text-white background-image">
      <div className="pt-4"><Header /></div>
      <div className="row">
        <div className="col-12 d-flex justify-content-end mr-5">
          <button onClick={() => setModalEnroll(true)} className='btn btn-warning btn-lg text-white btn-sm'>ENROLL</button>
          {modalEnroll && <ModalEnroll closeModal={setModalEnroll} />}
        </div>
      </div>
      <div className="m-0 row justify-content-center align-items-center container-button">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <form onSubmit={(e) => accessStaff(e)}>
            {
              error ? <span className="text-danger">{error}</span> : null
            }
            <input type="text" placeholder="ID" className="form-control mb-2 bg-dark bg-opacity-70 text-white" value={idStaff} onChange={(e) => setIdStaff(e.target.value)}/>
            <div className="col-12 d-flex justify-content-center">
                <button className='btn btn-warning btn-md text-white' type='submit'>ACCESS</button>
                {routeMenuTable && LinkToMenuTable()}
            </div>
          </form>
        </div>
      </div>
      <div className="row d-flex align-items-end">
        <div className="col-4 d-flex justify-content-center">
        <Link to='/menu' className='btn btn-warning btn-lg text-white'>
            MENU
        </Link>
        </div>
        <div className="col-4 d-flex justify-content-center">
        <Link to='/cuisine' className='btn btn-warning btn-lg text-white'>
          CUISINE
        </Link>
        </div>
        <div className="col-4 d-flex justify-content-center">
        <Link to='/paid' className='btn btn-warning btn-lg text-white'>
          PAID OUT
        </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
