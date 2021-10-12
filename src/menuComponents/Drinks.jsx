import React from 'react'

const Drinks = ({ dataDrinks, orderDrinks, setOrderDrinks }) => {

  const addDataDrinks = (id) => {
    const newDataDrinks = dataDrinks.filter((item) => item.id === id);
    setOrderDrinks([...orderDrinks, ...newDataDrinks]);
  }

  return (
    <div>
      { 
        dataDrinks.map((item) => (
          <button key={item.id} className="btn bg-dark bg-gradient text-white m-2" onTouchStart={(() => addDataDrinks(item.id))}>{item.item} - ${item.price}</button>
        ))
      }
    </div>
  )
}

export default Drinks
