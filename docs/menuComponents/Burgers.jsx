import React from 'react';

const Burgers = ({ dataBurgers, orderBurgers, setOrderBurgers }) => {

  const addDataBurgers = (id) => {
  const newDataBurgers = dataBurgers.filter((item) => item.id === id);
  setOrderBurgers([...orderBurgers, ...newDataBurgers]);
  }

  return (
    <div>
      {
          dataBurgers.map((item) => (
          <button key={item.id} className="btn bg-dark bg-gradient text-white m-2" onTouchStart={(() => addDataBurgers(item.id))}>{item.item} - ${item.price}</button>
        ))
      }
    </div>
  )
}

export default Burgers
