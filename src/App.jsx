import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./pages/gallery/Gallery";
import Cookies from "./pages/terms/Cookies";
import Terms from "./pages/terms/Terms";
import Routeishon from "./pages/route/Route";
import ContactUs from "./pages/contactUs/ContactUs";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/terms+and+conditions" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/route" element={<Routeishon />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
