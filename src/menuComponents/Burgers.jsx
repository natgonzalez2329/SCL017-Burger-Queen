import React from 'react';

const Burgers = ({dataBurgers}) => {
  return (
    <div>
      {
          dataBurgers.map((item) => (
          <li key={item.id}>{item.item} - {item.price}</li>
        ))
      }
    </div>
  )
}

export default Burgers
