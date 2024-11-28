import { useState } from 'react';
import styles from './Vendors.module.css';
import { useNavigate } from 'react-router-dom';

// Importing images from the Vimage folder
import image1 from './Vimage/Hoodie.jpg';
import image2 from './Vimage/Teeshirt.jpeg';
import image3 from './Vimage/cap.jpeg';

const products = [
  {
    id: 1,
    image: image1,
    name: 'Hoodie',
    rating: 4.5,
    feedback:
      'Great quality and fast delivery! "The embroidery hoodie is a perfect blend of comfort and style. The detailed stitching adds a premium touch, making it stand out from other casual wear. The fabric is soft, breathable, and ideal for both chilly mornings and cool evenings. The fit is spot-on, and the hoodie retains its shape and color even after multiple washes. Highly recommended for anyone looking for a stylish yet cozy wardrobe staple!"',
  },
  {
    id: 2,
    image: image2,
    name: 'Tshirt',
    rating: 4,
    feedback:
      'Affordable and stylish product!  "The embroidery Tshirt is a perfect blend of comfort and style. The detailed stitching adds a premium touch, making it stand out from other casual wear. The fabric is soft, breathable, and ideal for both chilly mornings and cool evenings. The fit is spot-on, and the hoodie retains its shape and color even after multiple washes. Highly recommended for anyone looking for a stylish yet cozy wardrobe staple!"',
  },
  {
    id: 3,
    image: image3,
    name: 'Cap',
    rating: 5,
    feedback:
      'Exceeded my expectations! "The embroidery Cap is a perfect blend of comfort and style. The detailed stitching adds a premium touch, making it stand out from other casual wear. The fabric is soft, breathable, and ideal for both chilly mornings and cool evenings. The fit is spot-on, and the hoodie retains its shape and color even after multiple washes. Highly recommended for anyone looking for a stylish yet cozy wardrobe staple!"',
  },
];

const Vendors = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [logo, setLogo] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleImageClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleSubmit = () => {
    // Handle the form submission logic here
    console.log('Logo:', logo);
    console.log('Name:', name);
    console.log('Description:', description);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <button className={styles.addButton} onClick={() => setIsModalOpen(true)}>
        Add Vendor Requirement
      </button>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Add Vendor Requirement</h2>
            <form>
              <label>
                Upload Logo:
                <input
                  type="file"
                  onChange={(e) => setLogo(e.target.files[0])}
                  accept="image/*"
                />
              </label>
              <label>
                Logo Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter logo name"
                />
              </label>
              <label>
                Logo Description:
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter logo description"
                ></textarea>
              </label>
              <div className={styles.buttonGroup}>
                <button
                  type="button"
                  className={styles.submitButton}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
            onClick={() => handleImageClick(product.id)}
          />
          <div className={styles.details}>
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.rating}>
              {'⭐'.repeat(Math.floor(product.rating))} ({product.rating})
            </p>
            <p className={styles.feedback}>{product.feedback}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vendors;
