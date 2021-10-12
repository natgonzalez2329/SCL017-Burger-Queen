import React from 'react';
import logo from '../assets/logo.png'
import "../index.css"

const Header = () => {
  return (
    <div className="d-flex justify-content-center flex-column">
      <h1 className="text-center mb-0">MR. BURGER</h1>
      <img src={logo} alt="mustache" className="opacity-25 align-self-center mustache" />
    </div>
  )
}

export default Header
