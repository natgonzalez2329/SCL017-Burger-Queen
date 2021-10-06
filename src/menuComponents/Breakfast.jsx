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
          <li key={item.id} className="btn btn-warning m-2" onTouchStart={(() => addDataBreakfast(item.id))}>{item.item} - {item.price}</li>
        ))
      }
    </div>
  )
}

export default Breakfast
