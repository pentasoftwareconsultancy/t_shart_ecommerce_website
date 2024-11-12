import React, { useState, useRef, useEffect } from "react";
import styles from "./Hero.module.css";
import images1 from './images/shirt.jpg';
import images2 from './images/logo2.jpeg';

const Hero = () => {
  // State for shirt overlay color in each slider
  const [slider1Color, setSlider1Color] = useState("#FF0000"); // Default color: red
  const [slider2Color, setSlider2Color] = useState("#0000FF"); // Default color: blue


  const canvasRef1 = useRef(null);
  const canvasRef2 = useRef(null);
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);

  // Slider images - using the same image for both sliders for demonstration
  const sliderImages = [
    { id: 1, imagePath: images1 },
    { id: 2, imagePath: images2 },
  ];

  // Function to apply color change at the pixel level
  const applyColorChange = (canvasRef, imgRef, color) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.drawImage(imgRef.current, 0, 0, canvas.width, canvas.height);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Convert hex color to RGB
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    // Loop through all pixels and change shirt color based on specific conditions
    for (let i = 0; i < data.length; i += 4) {
      const red = data[i];
      const green = data[i + 1];
      const blue = data[i + 2];

      // Condition for detecting shirt color (for example, red or blue shirt)
      if (red > 100 && green < 100 && blue < 100) {
        // Change shirt color (modify red, green, blue values)
        data[i] = r;     // Red channel
        data[i + 1] = g; // Green channel
        data[i + 2] = b; // Blue channel
      } else if (blue > 100 && red < 100 && green < 100) {
        // Optional: Add another condition for a different shirt color (e.g., blue)
        data[i] = r;
        data[i + 1] = g;
        data[i + 2] = b;
      }
    }

    context.putImageData(imageData, 0, 0);
  };

  useEffect(() => {
    if (imgRef1.current && canvasRef1.current) {
      applyColorChange(canvasRef1, imgRef1, slider1Color);
    }
    if (imgRef2.current && canvasRef2.current) {
      applyColorChange(canvasRef2, imgRef2, slider2Color);
    }
  }, [slider1Color, slider2Color]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.sliderContainer}>
        {/* Slider 1 */}
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderImageContainer}>
            <img
              ref={imgRef1}
              src={sliderImages[0].imagePath}
              alt="Slider 1 - Image"
              className={styles.shirtImage}
              style={{ display: "none" }}
            />
            <canvas
              ref={canvasRef1}
              width={400} // Set canvas width
              height={400} // Set canvas height (match image size)
            ></canvas>
          </div>
          {/* Color picker for Slider 1 */}
          <div className={styles.colorPicker}>
            <label>Select Color:</label>
            <input
              type="color"
              value={slider1Color}
              onChange={(e) => setSlider1Color(e.target.value)}
            />
          </div>
        </div>

        {/* Slider 2 */}
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderImageContainer}>
            <img
              ref={imgRef2}
              src={sliderImages[1].imagePath}
              alt="Slider 2 - Image"
              className={styles.shirtImage}
              style={{ display: "none" }}
            />
            <canvas
              ref={canvasRef2}
              width={400} // Set canvas width
              height={400} // Set canvas height (match image size)
            ></canvas>
          </div>
          {/* Color picker for Slider 2 */}
          <div className={styles.colorPicker}>
            <label>Select Color:</label>
            <input
              type="color"
              value={slider2Color}
              onChange={(e) => setSlider2Color(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
