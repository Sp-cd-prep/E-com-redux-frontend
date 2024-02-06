// components/Home.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/blogSlice';
import '../App.css';
import {Toastify} from './Toastify';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  const data = useSelector(state => state.blog.blogs);
  const dispatch = useDispatch();

  const handleClick=(itemId)=>{
    dispatch(addToCart(itemId));
    Toastify("item added to the cart")
  }

  return (
    <div>
      <h2>Home</h2>
      <div className="blog-container">
        {data
          .filter(item => item.category === 'Home')
          .map(item => (
            <div key={item.id} className="blog-item">
              <img src={item.image} alt={item.name} />
              <p>{item.text}</p>
              <button onClick={() => handleClick(item.id)}>Add to Cart</button>
            </div>
          ))}
          <ToastContainer/>
      </div>
    </div>
  );
}

export default Home;
