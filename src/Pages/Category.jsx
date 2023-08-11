import React from 'react'
import './Csspages/Category.css'
import landing4 from '../Images/landing4.jpg'
import landing5 from '../Images/landing5.jpg'
import landing8 from '../Images/landing8.jpg'
import landing9 from '../Images/landing9.jpg'
import landing7 from '../Images/landing7.jpg'
import landing6 from '../Images/landing6.jpg'
import { Link } from 'react-router-dom'
const Category = () => {
  return (
    <>
    <div className="row">
      <div className="col">
        <div className="card">
          <img src={landing7} style={{ height: "400px" }} alt="" />
        </div>
        <div className="card-footer">
          <Link to="/Mobile" className="btn btn-dark text-white w-100">
           <span className="bi bi-arrow-right">Shop for Mobiles</span>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={landing6} style={{ height: "400px" }} alt="" />
        </div>
        <div className="card-footer">
          <Link to="/Electronics" className="btn btn-dark text-white w-100">
            <span className="bi bi-arrow-right">Shop Electronics</span>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={landing4} style={{ height: "400px" }} alt="" />
        </div>
        <div className="card-footer">
          <Link to='/Groceries' className="btn btn-dark text-white w-100">
            <span className="bi bi-arrow-right">Home Groceries</span>
          </Link>
        </div>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col">
        <div className="card">
          <img src={landing5} style={{ height: "300px" }} alt="" />
        </div>
        <div className="card-footer">
          <Link to="/WomensFashion" className="btn btn-dark text-white w-100">
            <span className="bi bi-arrow-right">Womens Fashion Wear</span>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={landing8}style={{ height: "300px" }} alt="" />
        </div>
        <div className="card-footer">
          <Link to="/Homedecor" className="btn btn-dark text-white w-100">
           <span className="bi bi-arrow-right">Home Decors</span>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={landing9} style={{ height: "300px" }} alt="" />
        </div>
        <div className="card-footer">
          <Link to="/MensFashion" className="btn btn-dark text-white w-100">
            <span className="bi bi-arrow-right">Mens Fashion Wear</span>
          </Link>
        </div>
      </div>
    </div>
  </>

  )
}

export default Category