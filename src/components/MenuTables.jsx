import React from 'react'
import { Link } from 'react-router-dom';
import BackHomeButton from "./BackHomeButton";
import Header from "./Header";

const MenuTables = () => {
  return (
    <div>
      <Header />
      <BackHomeButton />
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-grid gap-2 col-6 mx-auto ">
          <Link to='/tables' className='btn btn-warning text-white' >
            TABLES
          </Link>
          <Link to='/newTable' className='btn btn-warning text-white' >
            NEW TABLE
          </Link>
          <Link to='/cuisine' className='btn btn-warning text-white' >
            CUISINE
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MenuTables
