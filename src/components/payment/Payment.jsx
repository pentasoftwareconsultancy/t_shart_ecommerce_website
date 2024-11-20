import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Payment.module.css'; // CSS module for styling

const Payment = () => {
  const location = useLocation();
  const cartItems = location.state?.cart || []; // Retrieve cart data from location state

  // Calculate total quantity and total price
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);

  return (
    <div className={styles.paymentPage}>
      {/* Left Side Content */}
      <div className={styles.leftSection}>
        {/* Cart Items Grid */}
        <div className={styles.cartItems}>
          <h2>Review Your Order</h2>
          <div className={styles.cartGrid}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.productImage} />
                <div>
                  <p>{item.name}</p>
                  <p>Price: ₹{item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ₹{item.totalPrice.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Address Form */}
        <div className={styles.addressForm}>
          <h2>Shipping Address</h2>
          <form>
            <div>
              <label>Full Name:</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>
            <div>
              <label>Mobile Number:</label>
              <input type="tel" placeholder="Enter your mobile number" required />
            </div>
            <div>
              <label>Address:</label>
              <textarea placeholder="Enter your address" required></textarea>
            </div>
            <div>
              <label>City:</label>
              <input type="text" placeholder="Enter your city" required />
            </div>
            <div>
              <label>Pin Code:</label>
              <input type="text" placeholder="Enter your pin code" required />
            </div>
            <div>
              <label>State:</label>
              <input type="text" placeholder="Enter your state" required />
            </div>
          </form>
        </div>
      </div>

      {/* Right Side Content */}
      <div className={styles.rightSection}>
        {/* Order Summary */}
        <div className={styles.orderSummary}>
          <h2>Order Summary</h2>
          <p>Total Products: {totalQuantity}</p>
          <p>Total Price: ₹{totalPrice}</p>
        </div>

        {/* Payment Mode */}
        <div className={styles.paymentMode}>
          <h2>Payment Mode</h2>
          <div>
            <label>
              <input type="radio" name="paymentMode" value="MasterCard" required />
              MasterCard
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="paymentMode" value="VisaCard" required />
              VisaCard
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="paymentMode" value="GPay" required />
              GPay
            </label>
          </div>
        </div>

        {/* Card Details */}
        <div className={styles.cardDetails}>
          <h2>Card Details</h2>
          <form>
            <div>
              <label>Card Holder's Name:</label>
              <input type="text" placeholder="Enter card holder's name" required />
            </div>
            <div>
              <label>Card Number:</label>
              <input type="text" placeholder="Enter card number" required />
            </div>
            <div className={styles.cardExpiration}>
              <label>Expiration Date:</label>
              <input type="text" placeholder="MM/YY" required />
            </div>
            <div>
              <label>CVV:</label>
              <input type="text" placeholder="Enter CVV" required />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
