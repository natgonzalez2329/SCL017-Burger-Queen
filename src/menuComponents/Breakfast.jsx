import React from 'react';

const Breakfast = ({dataBreakfast}) => {
  return (
    <div>
      {
          dataBreakfast.map((item) => (
          <li key={item.id} className="btn btn-warning m-2">{item.item} - {item.price}</li>
        ))
      }
    </div>
  )
}

export default Breakfast
