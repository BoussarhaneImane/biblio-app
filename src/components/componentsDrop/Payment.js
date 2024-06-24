import React, { useEffect, useState } from 'react';
import './Payment.css';
import Navbar from '../Navbar/Navbar';
import FirstNav from '../Navbar/FirstNav';
import Footer from '../Bares/Footer';

const Payment = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);
    const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.slice(1)), 0);
    setTotal(totalPrice);
  }, []);

  const handlePayment = () => {
    alert('Payment successful!');
    localStorage.removeItem('cart'); 
  };

  return (
    <>
    <FirstNav/>
    <Navbar/>
    <div className="payment-page">
      <h1 className='h1'>Payment Page</h1>
      <div className="cart-details">
        {cart.map((course, index) => (
          <div key={index} className="course-details">
            <img src={course.imgSrc} alt={course.label} className="course-image" />
            <h2>{course.label}</h2>
            <p>{course.description}</p>
            <p className="course-price">{course.price}</p>
          </div>
        ))}
      </div>
      <h2>Total: ${total.toFixed(2)}</h2>
      <button onClick={handlePayment} className="pay-button">Proceed to Payment</button>
    </div>
    <Footer/>
    </>
  );
};

export default Payment;
