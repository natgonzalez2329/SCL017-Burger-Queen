import React from 'react'

const Drinks = ({dataDrinks}) => {
  return (
    <div>
      { 
        dataDrinks.map((item) => (
          <li key={item.id} className="btn btn-primary m-2">{item.item} - {item.price}</li>
        ))
      }
    </div>
  )
}

export default Drinks
