import React from 'react'
import { Link } from 'react-router-dom'
import "../css/header.css"

function Header() {
    return (
        <div className='header'>
          <div className="logo">V-Commerce</div>
          <div className="menu">
            <li><Link to="/">Products</Link></li>
            <li><Link to="/myOrders">MyOrders</Link></li>
            
          </div>
          <div className="log">
                <div className="logIn">
                    <Link to="/logIn">LogIn</Link>
                </div>
                <div className="signUp">
                    <Link to="/signup">SignUp</Link>
                </div>
          </div>
        </div>
      )
}

export default Header
