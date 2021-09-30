import React from 'react';

const Extras = ({dataExtras}) => {
  return (
    <div>
      { 
        dataExtras.map((item) => (
          <li key={item.id}>{item.item} - {item.price}</li>
        ))
      }
    </div>
  )
}

export default Extras
