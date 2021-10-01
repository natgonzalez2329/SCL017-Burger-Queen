import React from 'react';

const ModalEnroll = ({closeModal}) => {
  return (
    <div className="modalBackground">
      <div className="modal-container">
        <div className='container__modal'>
                <div className='content__modal'>
                  <span className='close__modal' onClick={() => closeModal(false)}> &times;</span>
                  <form>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="ID"/>
                  </form>
                  <div class='modal__footer'>
                    <button className="btn btn-danger m-2" onClick={() => closeModal(false)}>ENROLL</button>
                  </div>
                </div>
              </div>
      </div>
    </div>
  )
}

export default ModalEnroll
