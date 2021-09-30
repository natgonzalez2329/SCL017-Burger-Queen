import React from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import "../index.css"

const Home = () => {
  return (
    <div className="m-0 container-fluid  vh-100 text-white background">
      <Header />
      <div className="row p-5 m-5">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <form>
            <input type="text" placeholder="ID" className="form-control mb-2"/>
            <div className="col-12 d-flex justify-content-center">
            <Link to='/menuTables' className='btn btn-warning btn-md text-white'>
                ACCESS
            </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="row pt-5 mt-5">
        <div className="col-4 d-flex justify-content-center">
        <Link to='/menu' className='btn btn-warning btn-lg text-white'>
            MENU
        </Link>
        </div>
        <div className="col-4 d-flex justify-content-center">
        <Link to='/cuisine' className='btn btn-warning btn-lg text-white'>
          CUISINE
        </Link>
        </div>
        <div className="col-4 d-flex justify-content-center">
        <Link to='/paid' className='btn btn-warning btn-lg text-white'>
          PAID OUT
        </Link>
        </div>
      </div>
    </div>
  )
}
/* class="d-grid gap-2 d-md-flex justify-content-md" */
export default Home
