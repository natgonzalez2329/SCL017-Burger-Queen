import React from 'react';

const Breakfast = ({dataBreakfast, orderBreakfast, setOrderBreakfast}) => {

  const addDataBreakfast = (id) => {
    const newDataBreakfast = dataBreakfast.filter((item) => item.id === id);
    setOrderBreakfast([...orderBreakfast, ...newDataBreakfast]);
  }
  
  return (
    <div>
      {
          dataBreakfast.map((item) => (
          <button key={item.id} className="btn bg-dark bg-gradient text-white m-2" onTouchStart={(() => addDataBreakfast(item.id))}>{item.item} - ${item.price}</button>
        ))
      }
    </div>
  )
}

export default Breakfast
