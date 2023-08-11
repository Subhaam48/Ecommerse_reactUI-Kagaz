import React, { useContext } from "react";
import { UserData } from "./ContextFetch";
import "./Csspages/Product.css";
import Category from "./Category";
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";

const Product = () => {
  let data = useContext(UserData);


  return (
    <>
    <h3 className="page_name">::Product Page ::</h3>
    <Category/>
      <div className="cards">
        <div className="card-menu">
          {data.map((el) => {
            return (
              <div className="card">
               <Link to={"/details/"+el.id}>
               <div className="card-image">
                  <img src={el.images[1]} alt="" />
                </div>
               </Link>
                <div className="card-body">
                  <h5>{el.title}</h5>
                  {/* <h6 className='card-desc'>{el.description}</h6> */}
                  <span>Rating{el.rating}🌟</span>
                  <h6>Discount:{el.discountPercentage}%</h6>
                  <h4>Price:{el.price}$</h4>
                </div>
                {/* <button>
                   <span class="shadow"></span>
                   <span class="edge"></span>
                   <span class="front text"> Click me
                   </span>
                  </button> */}
                <button className="card-btn">Add To</button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;

