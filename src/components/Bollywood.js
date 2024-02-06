// components/Bollywood.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/blogSlice';
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Bollywood = () => {
  
  const data = useSelector(state => state.blog.blogs);
  const dispatch = useDispatch();

  const showToastMessage = () => {
    toast.success("Item Saved Succesfully !!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleClick=(itemId)=>{
    dispatch(addToCart(itemId));
    showToastMessage()
  }

  return (
    <div>
      <h2>Bollywood</h2>
      <div className="blog-container">
        {data
          .filter(item => item.category === 'Bollywood')
          .map(item => (
            <div key={item.id} className="blog-item">
              <img src={item.image} alt={item.name} />
              <p>{item.text}</p>
              <button onClick={()=>{handleClick(item.id)}}>Add to Cart</button>
            </div>
          ))}
      </div>
          <ToastContainer />
    </div>
  );
}
export default Bollywood;


