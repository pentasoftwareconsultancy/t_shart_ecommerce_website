import React, { useState, useRef } from "react";
import styles from "./Imagess.module.css";
import logo from "../../components/imagess/img/logo12.png"; // Path to the logo image
import shirtWhite from "../../components/imagess/img/shirt5new.png"; // White shirt image
import shirtBlack from "../../components/imagess/img/shirt4new.png"; // Black shirt image
import shirtRed from "../../components/imagess/img/shirt3new.png"; // Red shirt image
import shirtGreen from "../../components/imagess/img/shirt3new.png"; // Green shirt image
import shirtBlue from "../../components/imagess/img/shirt4new.png"; // Blue shirt image

const Imagess = () => {
  const [shirtImage, setShirtImage] = useState(shirtWhite); // Default shirt image
  const [logoPosition, setLogoPosition] = useState({ x: 140, y: 180 }); // Default logo position
  const [logoSize, setLogoSize] = useState(50); // Default logo size
  const [isStretching, setIsStretching] = useState(false); // Track if stretching
  const [stretchDirection, setStretchDirection] = useState(""); // Direction of stretching
  const [isMoving, setIsMoving] = useState(false); // Track if moving
  const logoRef = useRef(null); // Ref to logo element
  const startMousePosition = useRef(null); // Store the initial mouse position

  // Map shirt colors to images
  const shirtImages = {
    white: shirtWhite,
    black: shirtBlack,
    red: shirtRed,
    green: shirtGreen,
    blue: shirtBlue,
  };

  const handleMouseMove = (e) => {
    const deltaX = e.clientX - startMousePosition.current.x;
    const deltaY = e.clientY - startMousePosition.current.y;

    if (isStretching) {
      if (stretchDirection === "right") {
        const newWidth = Math.min(200, Math.max(50, logoSize + deltaX));
        setLogoSize(newWidth);
      } else if (stretchDirection === "left") {
        const newWidth = Math.min(200, Math.max(50, logoSize - deltaX));
        setLogoPosition((prev) => ({ ...prev, x: prev.x + deltaX }));
        setLogoSize(newWidth);
      } else if (stretchDirection === "top") {
        const newHeight = Math.min(200, Math.max(50, logoSize - deltaY));
        setLogoPosition((prev) => ({ ...prev, y: prev.y + deltaY }));
        setLogoSize(newHeight);
      } else if (stretchDirection === "bottom") {
        const newHeight = Math.min(200, Math.max(50, logoSize + deltaY));
        setLogoSize(newHeight);
      }
    } else if (isMoving) {
      const shirtRect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - shirtRect.left - logoSize / 2; // Calculate horizontal position
      const y = e.clientY - shirtRect.top - logoSize / 2; // Calculate vertical position
      setLogoPosition({ x, y });
    }
  };

  const handleMouseDown = (e, action, direction) => {
    startMousePosition.current = { x: e.clientX, y: e.clientY }; // Store initial mouse position
    if (action === "stretch") {
      setIsStretching(true);
      setStretchDirection(direction);
    } else if (action === "move") {
      setIsMoving(true);
    }
  };

  const handleMouseUp = () => {
    setIsStretching(false);
    setIsMoving(false);
    setStretchDirection("");
  };

  const handleMouseLeave = () => {
    setIsStretching(false);
    setIsMoving(false);
    setStretchDirection("");
  };

  const handleShirtColorChange = (color) => {
    setShirtImage(shirtImages[color]);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.shirt}
        style={{
          backgroundImage: `url(${shirtImage})`, // Dynamically set the shirt image
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={styles.logo}
          ref={logoRef}
          style={{
            left: `${logoPosition.x}px`,
            top: `${logoPosition.y}px`,
            width: `${logoSize}px`,
            height: `${logoSize}px`,
          }}
          onMouseDown={(e) => handleMouseDown(e, "move")} // Start moving the logo
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {/* Right Stretch Handle */}
          <div
            className={`${styles.resizeHandle} ${styles.rightHandle}`}
            onMouseDown={(e) => handleMouseDown(e, "stretch", "right")}
          />
          {/* Left Stretch Handle */}
          <div
            className={`${styles.resizeHandle} ${styles.leftHandle}`}
            onMouseDown={(e) => handleMouseDown(e, "stretch", "left")}
          />
          {/* Top Stretch Handle */}
          <div
            className={`${styles.resizeHandle} ${styles.topHandle}`}
            onMouseDown={(e) => handleMouseDown(e, "stretch", "top")}
          />
          {/* Bottom Stretch Handle */}
          <div
            className={`${styles.resizeHandle} ${styles.bottomHandle}`}
            onMouseDown={(e) => handleMouseDown(e, "stretch", "bottom")}
          />
        </div>
      </div>

      <div className={styles.controls}>
        <label>Choose Shirt Color:</label>
        <div className={styles.colorOptions}>
          {Object.keys(shirtImages).map((color) => (
            <button
              key={color}
              className={`${styles.colorButton} ${styles[color]}`}
              onClick={() => handleShirtColorChange(color)}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Imagess;
