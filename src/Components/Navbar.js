import React from "react";
import { BsPersonCircle, BsTruck, BsCartPlusFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {

  const { cartitems } = useSelector( state => state.CartReducer);
  const location = useLocation()
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="brandName" to={'/'}>BigBasket</Link>
      <span className="icon">
        <BsTruck />
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item2 dropdown">
            <Link className="nav-link" to={"/products"} >
              PRODUCTS
            </Link>
          </li>
          
          <li className="nav-item4">
            <Link className="nav-link" to={'/faq'}>
              FAQ
            </Link>
          </li>
          { location.pathname === '/login' ? <li className="nav-item5">
            <div className="dropdown show">
              <div
                className="dropdown-toggle"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <BsPersonCircle />
              </div>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  Profile
                </a>
                <Link className="dropdown-item" to={'/login'}>
                  Log Out
                </Link>
              </div>
            </div>
          </li> : '' }
          
          <li className="nav-item7">
           
            <Link to={'/cart'} ><BsCartPlusFill /><span className="cartcount">{cartitems.length}</span></Link> 
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
