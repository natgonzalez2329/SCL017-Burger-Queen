import React from 'react'

const Drinks = ({dataDrinks}) => {
  return (
    <div>
      { 
        dataDrinks.map((item) => (
          <li key={item.id}>{item.item} - {item.price}</li>
        ))
      }
    </div>
  )
}

export default Drinks
