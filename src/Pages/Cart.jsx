import React, { useEffect, useState } from 'react';
import '../Pages/Csspages/cart.css'; // Import the CSS file


const Cart = () => {
  const [Cart, setCart] = useState([]);

  useEffect(() => {
    const CartItems = JSON.parse(localStorage.getItem("userCart"));
    setCart(CartItems);
  }, []);

  const handleRemoveFromCart = (productId) => {
    const updatedCart = Cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("userCart", JSON.stringify(updatedCart));
  };

  return (
    
    <div className="cart-container">
      <h3>Your's Selected Items</h3>
      {Cart.map((el) => (
        <div className="cart-item" key={el.id}>
          <img src={el.thumbnail} alt="" />
          <div className="item-details">
            <dt className="detail-title">Title</dt>
            <dd>{el.title}</dd>
            <dt className="detail-title">Brand</dt>
            <dd>{el.brand}</dd>
            <dt className="detail-title">Description</dt>
            <dd>{el.description}</dd>
            <dt className="detail-title">Rating⭐</dt>
            <dd>{el.rating}</dd>
            <dt className="detail-title">Stock</dt>
            <dd>{el.stock}</dd>
            <dt className="detail-title">Price</dt>
            <dd>${el.price}</dd>
            <dt className="detail-title">Discount%</dt>
            <dd>{el.discountPercentage}</dd>
            <button className='remove' onClick={() => handleRemoveFromCart(el.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
