import { Routes, Route } from "react-router-dom";


import HomePages from "./pages/homePage/HomePages";
import AboutPage from "./pages/aboutusPages/AboutUsPage";
import TshartPages from "./pages/tshartPages/TshartPages";
import CapPages from "./pages/capPages/CapPages";
import Navbar from "./components/navbar/Navbar";
import CartPages from "./pages/cartPages/CartPages";
import Login from "./components/profile/login/Login";
import Tshart from "./components/tshart/Tshart";
import CardsGrid from "./components/home/card/Card"; // Import your Card component
import ProductDetails from "./components/home/productDetails/ProductDetails"; // Import ProductDetails component

import "./App.css";
import Contact from "./components/contact/Contact";
import ContactUsPages from "./pages/contactUsPages/ContactUsPages";
import LoginPage from "./pages/loginPage/LoginPage";
import Forgotpassword from "./pages/forgotpasswordPages/ForgotpasswordPages";
import ForgotpasswordPages from "./pages/forgotpasswordPages/ForgotpasswordPages";
import RegisterPages from "./pages/registerPages/RegisterPages";
import Footer from "./components/Footer/Footer";
import Whatsapp from "./components/whatsapp/Whatsapp";
import PrivacyPages from "./pages/privacyPages/PrivacyPages";
import TermsPages from "./pages/termsPages/TermsPages";


function App() {
  return (
    <>
   
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/aboutUs" element={<AboutPage />} />
        <Route path="/shirts" element={<TshartPages />} />
        <Route path="/caps" element={<CapPages />} />
        <Route path="/contact" element={<ContactUsPages />} />
        <Route path="/" element={<CardsGrid />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/Forgotpassword" element={<ForgotpasswordPages />} />
        <Route path="/Register" element={<RegisterPages/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/privacy" element={<PrivacyPages/>}/>
        <Route path = "/cart" element={<CartPages />} />
        <Route path = "/terms" element={<TermsPages />} />
        
      </Routes>
      <Whatsapp/>
      <Footer/>
    </>
  );
}

export default App;
