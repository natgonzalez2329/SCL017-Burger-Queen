import React from 'react';

const Extras = ({ dataExtras, orderExtras, setOrderExtras }) => {

  const addDataExtras = (id) => {
    const newDataExtras = dataExtras.filter((item) => item.id === id);
    setOrderExtras([...orderExtras, ...newDataExtras]);
  }

  return (
    <div>
      { 
        dataExtras.map((item) => (
          <button key={item.id} className="btn bg-dark bg-gradient text-white m-2" onTouchStart={(() => addDataExtras(item.id))}>{item.item} - ${item.price}</button>
        ))
      }
    </div>
  )
}

export default Extras
