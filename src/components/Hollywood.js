import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/blogSlice';
import '../App.css';
import {Toastify} from './Toastify';
import { ToastContainer } from 'react-toastify';

const Hollywood = () => {
    const data = useSelector(state => state.blog.blogs);
    const dispatch = useDispatch()

    const handleClick=(itemId)=>{
      dispatch(addToCart(itemId));
      Toastify("item added to the cart")
    }
    
    return (
      <div>
        <h2>Hollywood</h2>
        {data.filter(item => item.category === 'Hollywood').map(item => (
          <div key={item.id} className="blog-item">
            <img src={item.image} alt={item.name} />
            <p>{item.text}</p>
            <button onClick={() => handleClick(item.id)}>Add to Cart</button>
          </div>
        ))}
        <ToastContainer/>
      </div>
    );
}

export default Hollywood