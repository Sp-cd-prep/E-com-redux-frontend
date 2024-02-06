// components/AddToCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increment, decrement } from '../features/blogSlice';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const AddToCart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.blog.cart);
  const dispatch = useDispatch();
  const total = useSelector(state => state.blog.total);
  console.log(total)

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrement = (itemId) => {
    dispatch(increment(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrement(itemId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className='cart-img'>
              <img src={item.image} alt={item.name} />
            </div>
            <p>{item.text}</p>
            <p>Count: {item.count}</p>
            <button onClick={() => handleDecrement(item.id)}>-</button>
            <p>₹ {item.price * item.count}</p>
            <button onClick={() => handleIncrement(item.id)}>+</button>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="total">
        <p>Total: ₹ {total}</p>
      </div>
      <div className='payment'>
        <button onClick={()=>navigate('/payment')}>Check Out</button>
      </div>
    </div>
  );
}

export default AddToCart;
