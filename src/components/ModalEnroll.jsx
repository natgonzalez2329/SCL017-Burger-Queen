import React, { useState } from 'react';
import { addStaffData } from '../firebase/Crud';

const ModalEnroll = ({closeModal}) => {

  const [name, setName] = useState('');
  const [idStaff, setIdStaff] = useState('');

  const addWorker = (e) =>{
    e.preventDefault();
    const collectionStaff = { name, idStaff };
    console.log(collectionStaff);
    addStaffData(name, idStaff);
    setName('');
    setIdStaff('');
    closeModal(false);
  }

  return (
    <div className="modalBackground">
      <div className="modal-container">
        <div className='container__modal'>
                <div className='content__modal'>
                  <span className='close__modal' onClick={() => closeModal(false)}> &times;</span>
                  <form onSubmit={(e) => addWorker(e)}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="ID" value={idStaff} onChange={(e) => setIdStaff(e.target.value)}/>
                  <div className='modal__footer'>
                      <button className="btn btn-danger m-2" onClick={() => closeModal(false)}>CANCEL</button>
                        <button className='btn btn-warning text-white' type="submit">ENROLL</button>
                    </div>
                      </form>
                  <p>name: {name}, id: {idStaff}</p>
                </div>
        </div>
      </div>
    </div>
  )
}

export default ModalEnroll
