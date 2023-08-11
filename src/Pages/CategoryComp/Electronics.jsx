import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Electronics = () => {
    const [electronics, setElectronics] = useState([]);

    useEffect(() => {
      fetch("https://dummyjson.com/products/category/laptops")
        .then((response) =>{
            return  response.json()
        })
        .then((data) => {
          //console.log(data);
          setElectronics(data.products);
        });
    }, []);
    return (
      <div className="container-fluid">
        <h3
          style={{ padding: "12px", fontFamily: "fantasy", textAlign: "center" }}
        >
        Laptops
        </h3>
        <div className="d-flex flex-wrap justify-content-around">
          {electronics.map((product) => {
            return (
              <div
                className="card m-2"
                style={{ width: "250px", boxShadow: "0 0 18px 0 black" }}
                key={product.id}
              >
                <Link to={"/details/" + product.id}>
                  <img
                    src={product.thumbnail}
                    style={{ height: "200px"}}
                    className="card-img-top"
                    alt=""
                  />
                </Link>
                <div className="card-header">
                  <h6>{product.title}</h6>
                </div>
                <div className="card-body" style={{ width: "250px"}}>
                  <dl>
                    <dt>Price</dt>
                    <dd>${product.price}</dd>
                    <dt>Rating⭐</dt>
                    <dd>{product.rating}</dd>
                    <Link to='/product'><button>Back</button></Link>
                  </dl>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Electronics