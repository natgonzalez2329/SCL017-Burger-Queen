import React from 'react';

const Breakfast = ({dataBreakfast}) => {
  return (
    <div>
      {
          dataBreakfast.map((item) => (
          <li key={item.id}>{item.item} - {item.price}</li>
        ))
      }
    </div>
  )
}

export default Breakfast
