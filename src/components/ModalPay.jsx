import React from 'react';
import { Link } from 'react-router-dom';

const ModalPay = ({closeModal}) => {
  return (
      <div className="modalBackground">
      <div className="modal-container">
        <div className='container__modal'>
                <div className='content__modal'>
                  <span className='close__modal' onClick={() => closeModal(false)}> &times;</span>
                    <h3>Paid out</h3>
                  <div class='modal__footer'>
                    <Link to='/'>
                      <button className="btn btn-danger m-2" onClick={() => closeModal(false)}>OK</button>
                    </Link>
                    
                  </div>
                </div>
              </div>
      </div>
    </div>
  )
}

export default ModalPay
