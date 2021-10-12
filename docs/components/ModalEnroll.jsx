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
            <span className='close__modal d-flex justify-content-end' onTouchStart={() => closeModal(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
              </svg>
            </span>
            <form onSubmit={(e) => addWorker(e)}>
                <input type="text" className="form-control my-3" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" className="form-control mb-3" placeholder="ID" value={idStaff} onChange={(e) => setIdStaff(e.target.value)}/>
                <div className='modal__footer d-grid gap-2 d-md-flex justify-content-md-end'>
                    <button className="btn btn-danger me-md-2" onClick={() => closeModal(false)}>CANCEL</button>
                    <button className='btn btn-warning text-white' type="submit">ENROLL</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalEnroll
