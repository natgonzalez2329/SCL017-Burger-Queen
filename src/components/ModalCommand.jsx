import React from 'react';

const ModalCommand = ({closeModal}) => {
  return (
      <div className="modalBackground">
      <div className="modal-container">
        <div className='container__modal'>
                <div className='content__modal'>
                  <span className='close__modal' onClick={() => closeModal(false)}> &times;</span>
                    <h3>Has been sent!!</h3>
                  <div class='modal__footer'>
                    <button className="btn btn-danger m-2" onClick={() => closeModal(false)}>OK</button>
                  </div>
                </div>
              </div>
      </div>
    </div>
  )
}

export default ModalCommand
