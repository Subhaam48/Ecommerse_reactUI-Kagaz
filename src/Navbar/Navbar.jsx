import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {AiOutlineShoppingCart} from 'react-icons/ai'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="img" src="https://tse4.mm.bing.net/th?id=OIP.nburQyj1SHjExRBzaHJUWwHaEc&pid=Api&P=0&h=180" alt="S'SP" />
        <span className="brand-name">KagaZ</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to='/Home' href="#">Home</Link>
        </li>
        <li>
          <Link  to='/Product' href="#">Product</Link>
        </li>
        <li>
          <Link to='/Cart' href="#" className="cartMenu"><AiOutlineShoppingCart/>Cart
          <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
          </Link>
        </li>

        <li>
          <Link to='/Login' href="#">LogIn</Link>
        </li>
        <li>
          <Link to='/' href="#">Register</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
