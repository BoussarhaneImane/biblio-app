import React, { useEffect, useState } from 'react';
import './Payment.css';
import Navbar from '../Navbar/Navbar';
import FirstNav from '../Navbar/FirstNav';
import Footer from '../Bares/Footer';
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from 'axios';

const Payment = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const userName = localStorage.getItem('userName'); 
  const userId = localStorage.getItem('userId'); 

  useEffect(() => {
    if (userName) {
      const cartKey = `cart_${userName}`;
      const cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];
      setCart(cartItems);

      // Calculate the total price
      const totalPrice = cartItems.reduce((acc, item) => {
        const price = typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price;
        return acc + price * (item.quantity || 1);
      }, 0);
      setTotal(totalPrice);
    }
  }, [userName]); // Only depend on userName

  const handleQuantityChange = (index, change) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map((item, i) => {
        if (i === index) {
          const newQuantity = (item.quantity || 1) + change;
          return { ...item, quantity: Math.max(newQuantity, 1) }; // Ensure quantity is at least 1
        }
        return item;
      }).filter(item => item.quantity > 0);

      // Recalculate total
      const totalPrice = updatedCart.reduce((acc, item) => {
        const price = typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price;
        return acc + price * (item.quantity || 1);
      }, 0);
      
      setTotal(totalPrice);

      if (userName) {
        const cartKey = `cart_${userName}`;
        localStorage.setItem(cartKey, JSON.stringify(updatedCart));
      }
      return updatedCart;
    });
  };

  const handleDeleteItem = (index) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter((_, i) => i !== index);
      if (userName) {
        const cartKey = `cart_${userName}`;
        localStorage.setItem(cartKey, JSON.stringify(updatedCart));
      }
      return updatedCart;
    });
  };

  const handlePayment = async () => {
    if (!userId) {
      alert('User ID is missing. Please log in again.');
      return;
    }

    try {
      const paymentResult = 'dummy_payment_result'; // Replace with actual payment result from your payment gateway

      // Send order details to API
      await axios.post(`https://backend-biblio-4.onrender.com/orders/${userId}`, {
        items: cart,
        total,
        paymentResult
      });

      alert('Payment successful!');
      if (userName) {
        localStorage.removeItem(`cart_${userName}`);
      }
      setCart([]);
      setTotal(0);
    } catch (error) {
      console.error('Error during payment:', error);
    }
  };

  return (
    <>
      <FirstNav />
      <Navbar />
      <div className="payment-page">
        <h1 className="h1">Payment Page</h1>
        <div className="cart-details">
          {cart.map((course, index) => (
            <div key={index} className="course-details">
              <img src={course.imgSrc} alt={course.name} className="course-image" />
              <h2>{course.name}</h2>
              <p className="course-price">{course.price}</p>
              <div className="quantity-control">
                <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                <span>{course.quantity || 1}</span>
                <button onClick={() => handleQuantityChange(index, 1)}>+</button>
              </div>
              <span className="delete-icon" onClick={() => handleDeleteItem(index)}><RiDeleteBin5Fill /></span>
            </div>
          ))}
        </div>
        <h2>Total: ${total.toFixed(2)}</h2>
        <button onClick={handlePayment} className="pay-button">Proceed to Payment</button>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
