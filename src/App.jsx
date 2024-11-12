import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/homePage/HomePages";
import AboutPage from "./pages/aboutusPages/AboutPage";
import TshartPages from "./pages/tshartPages/TshartPages";
import CapPages from "./pages/capPages/CapPages";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/tshart" element={<TshartPages />} />
        <Route path="/cap" element={<CapPages />} />

      </Routes>
    </>
  );
}

export default App;
