import { Routes, Route } from "react-router-dom";


import HomePages from "./pages/homePage/HomePages";
import AboutPage from "./pages/aboutusPages/AboutPage";
import TshartPages from "./pages/tshartPages/TshartPages";
import CapPages from "./pages/capPages/CapPages";
import Navbar from "./components/navbar/Navbar";

import CardsGrid from "./components/home/card/Card"; // Import your Card component
import ProductDetails from "./components/home/productDetails/ProductDetails"; // Import ProductDetails component

import "./App.css";

function App() {
  return (
    <>
   
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/tshart" element={<TshartPages />} />
        <Route path="/cap" element={<CapPages />} />

        <Route path="/" element={<CardsGrid />} />
        <Route path="/product/:id" element={<ProductDetails />} />

       
      </Routes>
      
    </>
  );
}

export default App;
