import React from 'react'
import { Link } from 'react-router-dom';
import '../style/modalNewTable.css'

const ModalNewTable = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modal-container">
        <div className='container__modal'>
                <div className='content__modal'>
                  <span className='close__modal' onClick={() => closeModal(false)}> &times;</span>
                  <form>
                    <input type="text" placeholder="Client name"/>
                    <input type="text" placeholder="Table"/>
                  </form>
                  <div class='modal__footer'>
                    <button className="btn btn-danger m-2" onClick={() => closeModal(false)}>CANCEL</button>
                    <Link to='/newTable' className='btn btn-warning text-white' >
            NEW TABLE
          </Link>
                  </div>
                </div>
              </div>
      </div>
    </div>
  )
}

export default ModalNewTable
