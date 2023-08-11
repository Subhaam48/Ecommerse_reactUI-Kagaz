import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductDetails/productDetails.css'

const ProductDetails = () => {
    const [product, setProduct] = useState({
        // id: 0,
        // brand: "",
        // title: "",
        // price: 0,
        // description: "",
        // rating: 0,
    });

    const HandleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem("userCart")) || [];

        const itemFound = cartItems.some((el) => {
            return el.id === product.id;
        });

        if (itemFound) {
            const index = cartItems.findIndex((el) => el.id === product.id);
            if (index !== -1) {
                cartItems[index].quantity += 1;
                localStorage.setItem("userCart", JSON.stringify(cartItems));
            }
        } else {
            product["quantity"] = 1;
            cartItems.push(product);
            localStorage.setItem("userCart", JSON.stringify(cartItems));
        }
    };

    const param = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${param.id}`)
            .then((response) => response.json())
            .then((res) => {
                setProduct(res);
                console.log(res);
            });
    }, [param.id]);

    return (
        <div className="product-details">
            <h3> :: Product Details :: </h3>
            <div className="product-container">
                <div className="product-image">
                    <img
                        src={product.thumbnail}
                        width="50%"
                        style={{ height: "300px" }}
                        alt=""
                    />
                    <button
                        className="add-to-cart-button"
                        onClick={HandleAddToCart}
                    >
                        Add To Cart
                    </button>
                </div>
                <div className="product-info">
                    <div className="product-info-inner">
                        <dt className="product-label">Title</dt>
                        <dd className="product-value">{product.title}</dd>
                        <dt className="product-label">Brand</dt>
                        <dd className="product-value">{product.brand}</dd>
                        <dt className="product-label">Description</dt>
                        <dd className="product-value product-description">
                            {product.description}
                        </dd>
                        <dt className="product-label">Rating⭐</dt>
                        <dd className="product-value">{product.rating}</dd>
                        <dt className="product-label">Stock</dt>
                        <dd className="product-value">{product.stock}</dd>
                        <dt className="product-label">Price</dt>
                        <dd className="product-value">${product.price}</dd>
                        <dt className="product-label">Discount%</dt>
                        <dd className="product-value">
                            {product.discountPercentage}
                        </dd>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
