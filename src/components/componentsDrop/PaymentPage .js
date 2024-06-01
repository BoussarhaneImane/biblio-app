import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentPage.css'; 
const PaymentPage = () => {
  const location = useLocation();
  const { label, description, price, instructor, imgSrc } = location.state;


  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  
    setTotalPrice(newQuantity * parseFloat(price.replace('$', '')));
  };

  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <div className="course-details">
        <img src={imgSrc} alt={label} className="course-image" />
        <h2>{label}</h2>
        <p>{description}</p>
        <p>Instructor: {instructor}</p>
        <p>Price: {price}</p>
        <label>
          Quantity:
          <input type="number" min="1" value={quantity} onChange={handleQuantityChange} />
        </label>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <button className="pay-button">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default PaymentPage;
