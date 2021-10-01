import React from 'react';

const Extras = ({dataExtras}) => {
  return (
    <div>
      { 
        dataExtras.map((item) => (
          <li key={item.id} className="btn btn-success m-2">{item.item} - {item.price}</li>
        ))
      }
    </div>
  )
}

export default Extras
