import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../features/blogSlice';
import '../App.css';
import {Toastify} from './Toastify';
import { ToastContainer } from 'react-toastify';

const Food = () => {
    const data = useSelector(state => state.blog.blogs);
    const dispatch = useDispatch();

    const handleClick=(itemId)=>{
      dispatch(addToCart(itemId));
      Toastify("item added to the cart")
    }

    return (
      <div>
        <h2>Food</h2>
        {data.filter(item => item.category === 'Food').map(item => (
          <div key={item.id} className="blog-item">
            <img src={item.image} alt={item.name} />
            <p>{item.text}</p>
            <h2>₹ {item.price}</h2>
            <button onClick={() =>{handleClick(item.id)} }>Add to Cart</button>
          </div>
        ))}
        <ToastContainer autoClose={1000}/>
      </div>
    );
}

export default Food