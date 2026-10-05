import React, { useEffect, useState } from 'react';
import './Payment.css';
import Navbar from '../Navbar/Navbar';
import FirstNav from '../Navbar/FirstNav';
import Footer from '../Bares/Footer';
import { RiDeleteBin5Fill } from "react-icons/ri";

const Payment = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const userName = localStorage.getItem('userName');
  const userKey = localStorage.getItem('userId') || userName;

  useEffect(() => {
    if (userKey) {
      const cartKey = `cart_${userKey}`;
      const cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];
      setCart(cartItems);

      // Calculate the total price
      const totalPrice = cartItems.reduce((acc, item) => {
        const price = typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price;
        return acc + price * (item.quantity || 1);
      }, 0);
      setTotal(totalPrice);
    }
  }, [userKey]);

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
        const cartKey = `cart_${userKey}`;
        localStorage.setItem(cartKey, JSON.stringify(updatedCart));
      }
      return updatedCart;
    });
  };

  const handleDeleteItem = (index) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter((_, i) => i !== index);
      if (userName) {
        const cartKey = `cart_${userKey}`;
        localStorage.setItem(cartKey, JSON.stringify(updatedCart));
      }
      return updatedCart;
    });
  };

  const handlePayment = () => {
    if (!userKey) {
      alert('Connectez-vous pour enregistrer votre reçu de démonstration.');
      return;
    }

    const ordersKey = `orders_${userKey}`;
    const orders = JSON.parse(localStorage.getItem(ordersKey) || '[]');
    orders.push({ items: cart, total, createdAt: new Date().toISOString(), simulated: true });
    localStorage.setItem(ordersKey, JSON.stringify(orders));
    localStorage.removeItem(`cart_${userKey}`);
    alert('Commande de démonstration enregistrée. Aucun paiement réel n’a été effectué.');
    setCart([]);
    setTotal(0);
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
