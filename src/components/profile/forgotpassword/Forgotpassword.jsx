import React, { useState } from "react";
import styles from "./Forgotpassword.module.css";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]); // 4-digit OTP
  const [statusMessage, setStatusMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  // Handle email submission to send OTP
  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    setStatusMessage("Sending OTP...");

    try {
      // Simulate backend API call to send OTP
      const response = await fetch("https://your-backend-api.com/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsOtpSent(true);
        setStatusMessage("OTP sent to your email address!");
      } else {
        const errorData = await response.json();
        setStatusMessage(errorData.message || "Failed to send OTP. Try again.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again.");
      console.error("Error sending OTP:", error);
    }
  };

  // Handle OTP input change
  const handleOtpChange = (value, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(0, 1); // Only accept 1 digit per box
    setOtp(updatedOtp);

    // Auto-focus to the next input
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Handle OTP submission
  const handleSubmitOtp = (e) => {
    e.preventDefault();
    console.log("OTP Submitted:", otp.join(""));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Reset Password</h1>
        <p className={styles.description}>
          {isOtpSent
            ? "Enter the 4-digit OTP sent to your email."
            : "Enter your email address below, and we'll send you an OTP to reset your password."}
        </p>
        
        {/* Email Form */}
        {!isOtpSent ? (
          <form className={styles.form} onSubmit={handleSubmitEmail}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.buttonGroup}>
              <button type="submit" className={styles.submitButton}>
                Send OTP
              </button>
            </div>
          </form>
        ) : (
          /* OTP Form */
          <form className={styles.form} onSubmit={handleSubmitOtp}>
            <div className={styles.otpContainer}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  className={styles.otpInput}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  maxLength={1}
                />
              ))}
            </div>
            <div className={styles.buttonGroup}>
              <button type="submit" className={styles.submitButton}>
                Submit OTP
              </button>
            </div>
          </form>
        )}

        {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
      </div>
    </div>
  );
};

export default Forgotpassword;
