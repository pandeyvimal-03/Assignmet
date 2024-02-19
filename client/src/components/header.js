import React ,{useRef} from 'react'
import { Link } from 'react-router-dom'
import "../css/header.css"

function Header() {
  const secref = useRef()
  const showHamberger = () => {
    if (secref.current.style.display === "none") {
      secref.current.style.display = "block"; // or "flex", depending on your layout needs
    } else {
      secref.current.style.display = "none";
    }
  };
    return (
        <div className='header'>
          <div className="logo">V-Commerce</div>
          <div className="section2" ref={secref} >
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
         
          <div className="hamburger" onClick={showHamberger}><div></div><div /><div /></div>
        </div>
      )
}

export default Header
